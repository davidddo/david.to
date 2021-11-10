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
  sortComparer: (a, b) => a.position - b.position,
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

const featureSelector = createFeatureSelector<ProjectsState>(featureKey);

export const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors(featureSelector);

export const selectIsLoading = createLoadingSelector(featureSelector);
export const selectIsLoaded = createLoadedSelector(featureSelector);
