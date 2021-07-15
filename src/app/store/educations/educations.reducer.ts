import {
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { Education } from '@website/models';
import { EducationsAction } from './educations.actions';
import * as fromRoot from '@website/store';

export const featureKey = 'educations';

export const adapter = createEntityAdapter<Education>({
  selectId: education => education.id,
});

export interface EducationsState extends EntityState<Education> {
  loading: boolean;
  loaded: boolean;
}

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

export const selectEducationsState = createFeatureSelector<
  State,
  EducationsState
>(featureKey);

export const {
  selectIds: selectEducationIds,
  selectEntities: selectEducationEntities,
  selectAll: selectAllEducations,
  selectTotal: selectEducationsTotal,
} = adapter.getSelectors(selectEducationsState);

export const selectIsLoading = createSelector(
  selectEducationsState,
  state => state.loading,
);

export const selectIsLoaded = createSelector(
  selectEducationsState,
  state => state.loaded,
);
