import { createAction, props } from '@ngrx/store';
import { WorkExperience } from '@website/models';

const LOAD_EXPERIENCES = '[Experiences] Load Experiences';
const LOAD_EXPERIENCES_SUCCESS = '[Experiences] Load Experiences Success';
const LOAD_EXPERIENCES_FAILURE = '[Experiences] Load Experiences Failure';
const LOAD_EXPERIENCES_CACHE = '[Experiences] Load Experiences Cache';

export const loadExperiences = createAction(LOAD_EXPERIENCES);

export const loadExperiencesSuccess = createAction(
  LOAD_EXPERIENCES_SUCCESS,
  props<{ experiences: WorkExperience[] }>(),
);

export const loadExperiencesFailure = createAction(LOAD_EXPERIENCES_FAILURE);

export const loadExperiencesCache = createAction(LOAD_EXPERIENCES_CACHE);

export const ExperiencesAction = {
  loadExperiences,
  loadExperiencesSuccess,
  loadExperiencesFailure,
  loadExperiencesCache,
};
