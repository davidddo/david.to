import { InjectionToken } from '@angular/core';
import { Action, ActionReducerMap } from '@ngrx/store';

export * from './projects/projects-store.module';

export interface State {}

export const ROOT_REDUCERS = new InjectionToken<
  ActionReducerMap<State, Action>
>('ROOT_REDUCERS', {
  factory: () => ({}),
});
