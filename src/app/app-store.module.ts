import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '@website/environments/environment';
import {
  ROOT_REDUCERS,
  ExperiencesStoreModule,
  EducationsStoreModule,
  ProjectsStoreModule,
} from './store';

@NgModule({
  imports: [
    StoreModule.forRoot(ROOT_REDUCERS, {
      runtimeChecks: {
        strictStateSerializability: true,
        strictActionSerializability: false,
        strictActionWithinNgZone: true,
        strictActionTypeUniqueness: true,
      },
    }),
    EffectsModule.forRoot(),
    StoreDevtoolsModule.instrument({
      name: 'Personal Website',
      logOnly: environment.production,
    }),
    ExperiencesStoreModule,
    EducationsStoreModule,
    ProjectsStoreModule,
  ],
})
export class AppStoreModule {}
