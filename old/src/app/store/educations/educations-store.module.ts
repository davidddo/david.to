import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ExperiencesEffects } from './educations.effects';
import { EducationsService } from './educations.service';
import * as fromEducations from './educations.reducer';

@NgModule({
  imports: [
    StoreModule.forFeature(fromEducations.featureKey, fromEducations.reducer),
    EffectsModule.forFeature([ExperiencesEffects]),
  ],
  providers: [EducationsService],
})
export class EducationsStoreModule {}
