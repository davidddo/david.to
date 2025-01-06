import { createAction, props } from '@ngrx/store';
import { Education } from '@website/models';

const LOAD_EDUCATIONS = '[Educations] Load Educations';
const LOAD_EDUCATIONS_SUCCESS = '[Educations] Load Educations Success';
const LOAD_EDUCATIONS_FAILURE = '[Educations] Load Educations Failure';
const LOAD_EDUCATIONS_CACHE = '[Educations] Load Educations Cache';

export const loadEducations = createAction(LOAD_EDUCATIONS);

export const loadEducationsSuccess = createAction(
  LOAD_EDUCATIONS_SUCCESS,
  props<{ educations: Education[] }>(),
);

export const loadEducationsFailure = createAction(LOAD_EDUCATIONS_FAILURE);

export const loadEducationsCache = createAction(LOAD_EDUCATIONS_CACHE);

export const EducationsAction = {
  loadEducations,
  loadEducationsSuccess,
  loadEducationsFailure,
  loadEducationsCache,
};
