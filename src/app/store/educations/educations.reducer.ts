import { createFeatureSelector, createReducer, on } from '@ngrx/store';
import { createEntityAdapter } from '@ngrx/entity';
import { Education } from '@website/models';
import {
  createLoadedSelector,
  createLoadingSelector,
  DefaultEntityState,
} from '@website/shared/utils';
import { EducationsAction } from './educations.actions';
import * as fromRoot from '@website/store';

export const featureKey = 'educations';

export const adapter = createEntityAdapter<Education>({
  selectId: education => education.id,
  sortComparer: (a, b) => a.position - b.position,
});

export interface EducationsState extends DefaultEntityState<Education> {}

export interface State extends fromRoot.State {
  [featureKey]: EducationsState;
}

export const reducer = createReducer(
  adapter.getInitialState({
    loading: false,
    loaded: false,
  }),
  on(EducationsAction.loadEducations, state => ({ ...state, loading: true })),
  on(EducationsAction.loadEducationsSuccess, (state, { educations }) => {
    return adapter.setAll(educations, {
      ...state,
      loading: false,
      loaded: true,
    });
  }),
  on(
    EducationsAction.loadEducationsCache,
    EducationsAction.loadEducationsFailure,
    state => ({
      ...state,
      loading: false,
    }),
  ),
);

const featureSelector = createFeatureSelector<EducationsState>(featureKey);

export const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors(featureSelector);

export const selectIsLoading = createLoadingSelector(featureSelector);
export const selectIsLoaded = createLoadedSelector(featureSelector);
