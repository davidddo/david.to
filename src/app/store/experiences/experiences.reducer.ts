import {
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { WorkExperience } from '@website/models';
import { ExperiencesAction } from './experiences.actions';
import * as fromRoot from '@website/store';

export const featureKey = 'experiences';

export const adapter = createEntityAdapter<WorkExperience>({
  selectId: experience => experience.id,
});

export interface ExperiencesState extends EntityState<WorkExperience> {
  loading: boolean;
  loaded: boolean;
}

export interface State extends fromRoot.State {
  [featureKey]: ExperiencesState;
}

export const reducer = createReducer(
  adapter.getInitialState({
    loading: false,
    loaded: false,
  }),
  on(ExperiencesAction.loadExperiences, state => ({ ...state, loading: true })),
  on(ExperiencesAction.loadExperiencesSuccess, (state, { experiences }) => {
    return adapter.setAll(experiences, {
      ...state,
      loading: false,
      loaded: true,
    });
  }),
  on(
    ExperiencesAction.loadExperiencesCache,
    ExperiencesAction.loadExperiencesFailure,
    state => ({
      ...state,
      loading: false,
    }),
  ),
);

export const selectExperiencesState = createFeatureSelector<
  State,
  ExperiencesState
>(featureKey);

export const {
  selectIds: selectExperienceIds,
  selectEntities: selectExperienceEntities,
  selectAll: selectAllExperiences,
  selectTotal: selectExperiencesTotal,
} = adapter.getSelectors(selectExperiencesState);

export const selectIsLoading = createSelector(
  selectExperiencesState,
  state => state.loading,
);

export const selectIsLoaded = createSelector(
  selectExperiencesState,
  state => state.loaded,
);
