import { createFeatureSelector, createReducer, on } from '@ngrx/store';
import { createEntityAdapter } from '@ngrx/entity';
import { Project } from '@website/models';
import {
  createLoadedSelector,
  createLoadingSelector,
  DefaultEntityState,
} from '@website/shared/utils';
import { ProjectsAction } from './projects.actions';
import * as fromRoot from '@website/store';

export const featureKey = 'projects';

export const adapter = createEntityAdapter<Project>({
  selectId: project => project.id,
});

export interface ProjectsState extends DefaultEntityState<Project> {}

export interface State extends fromRoot.State {
  [featureKey]: ProjectsState;
}

export const reducer = createReducer(
  adapter.getInitialState({
    loading: false,
    loaded: false,
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

export const selectIsLoading = createLoadingSelector(selectProjectsState);
export const selectIsLoaded = createLoadedSelector(selectProjectsState);
