import { createAction, props } from '@ngrx/store';
import { Project } from '@website/models';

const LOAD_PROJECTS = '[Projects] Load Projects';
const LOAD_PROJECTS_SUCCESS = '[Projects] Load Projects Success';
const LOAD_PROJECTS_FAILURE = '[Projects] Load Projects Failure';
const LOAD_PROJECTS_CACHE = '[Projects] Load Projects Cache';

export const loadProjects = createAction(LOAD_PROJECTS);

export const loadProjectsSuccess = createAction(
  LOAD_PROJECTS_SUCCESS,
  props<{ projects: Project[] }>(),
);

export const loadProjectsFailure = createAction(LOAD_PROJECTS_FAILURE);

export const loadProjectsCache = createAction(LOAD_PROJECTS_CACHE);

export const ProjectsAction = {
  loadProjects,
  loadProjectsSuccess,
  loadProjectsFailure,
  loadProjectsCache,
};
