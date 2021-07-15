import { fn } from '@angular/compiler/src/output/output_ast';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action, ActionCreator, Creator } from '@ngrx/store';
import { FunctionWithParametersType } from '@ngrx/store/src/models';
import { Observable, of } from 'rxjs';
import {
  catchError,
  concatMap,
  delay,
  map,
  switchMap,
  withLatestFrom,
} from 'rxjs/operators';

type UnpackAction<T> = T extends string
  ? Extract<Action, { type: T }>
  : ReturnType<
      Extract<
        T,
        ActionCreator<string, FunctionWithParametersType<any[], object>>
      >
    >;

type On<A, T> = ((action: UnpackAction<A>) => OnCallbacks<T>) | OnCallbacks<T>;

type Method<A, T> =
  | ((action: UnpackAction<A>) => Observable<T>)
  | Observable<T>;

type CachingSelector<A> =
  | ((action: UnpackAction<A>) => Observable<boolean>)
  | Observable<boolean>;

interface OnCallbacks<T> {
  success: ((response: T) => Action) | Action;
  failure: ((response: any) => Action) | Action;
  cache?: Action;
}

interface Options {
  delay?: number;
  dispatch?: boolean;
  cachingSelector?: Observable<boolean>;
}

const getOnCallbackFn = <T, A>(
  on: On<A, T>,
  action: UnpackAction<A>,
  type: keyof OnCallbacks<T> = 'success',
) => {
  return (response: T) => {
    if (typeof on === 'function') {
      const onFn = on(action)[type];
      return type === 'cache' || typeof onFn !== 'function'
        ? onFn
        : onFn(response);
    }

    const onFn = on[type];
    return type === 'cache' || typeof onFn !== 'function'
      ? on[type]
      : onFn(response);
  };
};

export const createGenericEffect = <
  T,
  AC extends ActionCreator<string, Creator>,
  A extends string | AC,
>(
  allowedType: A,
  method: Method<A, T>,
  on: On<A, T>,
  cachingSelector?: CachingSelector<A>,
) => {
  return (actions$: Actions, options?: Options) => {
    const withCaching = cachingSelector !== undefined && 'cache' in on;
    const apiCall$ = (action: UnpackAction<A>) => {
      return (typeof method === 'function' ? method(action) : method).pipe(
        delay(options?.delay ?? 250),
        map(getOnCallbackFn(on, action)),
        catchError(response =>
          of(getOnCallbackFn(on, action, 'failure')(response)),
        ),
      );
    };

    return createEffect(
      () => {
        if (withCaching) {
          return actions$.pipe(
            ofType(allowedType),
            concatMap(action =>
              of(action).pipe(
                withLatestFrom(
                  typeof cachingSelector === 'function'
                    ? cachingSelector(action)
                    : cachingSelector,
                ),
              ),
            ),
            switchMap(([action, cached]) => {
              return cached
                ? of(getOnCallbackFn(on, action, 'cache'))
                : apiCall$(action);
            }),
          );
        }

        return actions$.pipe(ofType(allowedType), switchMap(apiCall$));
      },
      { dispatch: options?.dispatch ?? true },
    );
  };
};