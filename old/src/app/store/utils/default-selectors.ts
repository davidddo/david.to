import { createSelector, Selector } from '@ngrx/store';
import { DefaultEntityState } from './default-entity-state';

export const createLoadingSelector = <T, S, E extends DefaultEntityState<T>>(
  selector: Selector<S, E>,
) => {
  return createSelector(selector, state => state.loading);
};

export const createLoadedSelector = <T, S, E extends DefaultEntityState<T>>(
  selector: Selector<S, E>,
) => {
  return createSelector(selector, state => state.loaded);
};
