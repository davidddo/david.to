import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { createGenericEffect } from '@website/shared/utils';
import { ExperiencesAction } from './experiences.actions';
import { ExperiencesService } from './experiences.service';
import * as fromExperiences from './experiences.reducer';

@Injectable()
export class ExperiencesEffects {
  loadExperiences$ = createGenericEffect(
    ExperiencesAction.loadExperiences,
    this.experiencesService.fetchWorkExperiences(),
    {
      success: experiences => {
        return ExperiencesAction.loadExperiencesSuccess({ experiences });
      },
      failure: ExperiencesAction.loadExperiencesFailure(),
      cache: ExperiencesAction.loadExperiencesCache(),
    },
    this.store.select(fromExperiences.selectIsLoaded),
  )(this.actions$);

  constructor(
    private actions$: Actions,
    private store: Store<fromExperiences.State>,
    private experiencesService: ExperiencesService,
  ) {}
}
