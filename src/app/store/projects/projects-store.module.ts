import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ProjectsEffects } from './projects.effects';
import { featureKey, reducer } from './projects.reducer';
import { ProjectsService } from './projects.service';

@NgModule({
  imports: [
    StoreModule.forFeature(featureKey, reducer),
    EffectsModule.forFeature([ProjectsEffects]),
  ],
  providers: [ProjectsService],
})
export class ProjectsStoreModule {}
