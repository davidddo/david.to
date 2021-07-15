import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ExperiencesEffects } from './experiences.effects';
import { ExperiencesService } from './experiences.service';
import * as fromExperiences from './experiences.reducer';

@NgModule({
  imports: [
    StoreModule.forFeature(fromExperiences.featureKey, fromExperiences.reducer),
    EffectsModule.forFeature([ExperiencesEffects]),
  ],
  providers: [ExperiencesService],
})
export class ExperiencesStoreModule {}
