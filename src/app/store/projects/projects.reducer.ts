import {
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { Project } from '@website/models';
import { ProjectsAction } from './projects.actions';
import * as fromRoot from '@website/store';

export const featureKey = 'projects';

export const adapter = createEntityAdapter<Project>({
  selectId: project => project.id,
});

export interface ProjectsState extends EntityState<Project> {
  loading: boolean;
  loaded: boolean;
  imageUploading: boolean;
}

export interface State extends fromRoot.State {
  [featureKey]: ProjectsState;
}

export const reducer = createReducer(
  adapter.getInitialState({
    loading: false,
    loaded: false,
    imageUploading: false,
  }),
  on(ProjectsAction.loadProjects, state => ({ ...state, loading: true })),
  on(ProjectsAction.loadProjectsSuccess, (state, { projects }) => {
    return adapter.setAll(projects, { ...state, loading: false, loaded: true });
  }),
  on(
    ProjectsAction.loadProjectsCache,
    ProjectsAction.loadProjectsFailure,
    state => ({
      ...state,
      loading: false,
    }),
  ),
);

export const selectProjectsState = createFeatureSelector<State, ProjectsState>(
  featureKey,
);

export const {
  selectIds: selectProjectIds,
  selectEntities: selectProjectEntities,
  selectAll: selectAllProjects,
  selectTotal: selectProjectsTotal,
} = adapter.getSelectors(selectProjectsState);

export const selectIsLoading = createSelector(
  selectProjectsState,
  state => state.loading,
);

export const selectIsLoaded = createSelector(
  selectProjectsState,
  state => state.loaded,
);
