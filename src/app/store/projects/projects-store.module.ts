import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ProjectsEffects } from './projects.effects';
import { ProjectsService } from './projects.service';
import * as fromProjects from './projects.reducer';

@NgModule({
  imports: [
    StoreModule.forFeature(fromProjects.featureKey, fromProjects.reducer),
    EffectsModule.forFeature([ProjectsEffects]),
  ],
  providers: [ProjectsService],
})
export class ProjectsStoreModule {}
