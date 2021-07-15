import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { createGenericEffect } from '@website/shared/utils';
import { EducationsAction } from './educations.actions';
import { EducationsService } from './educations.service';
import * as fromExperiences from './educations.reducer';

@Injectable()
export class ExperiencesEffects {
  loadExperiences$ = createGenericEffect(
    EducationsAction.loadEducations,
    this.eductionsService.fetchEducations(),
    {
      success: educations => {
        return EducationsAction.loadEducationsSuccess({ educations });
      },
      failure: EducationsAction.loadEducationsFailure(),
      cache: EducationsAction.loadEducationsCache(),
    },
    this.store.select(fromExperiences.selectIsLoaded),
  )(this.actions$, { delay: 250 });

  constructor(
    private actions$: Actions,
    private store: Store<fromExperiences.State>,
    private eductionsService: EducationsService,
  ) {}
}
