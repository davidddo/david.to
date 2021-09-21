import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveComponentModule } from '@ngrx/component';
import { MaterialModule } from '@website/material';
import { SharedModule } from '@website/shared';
import { HomeComponent } from './container';
import {
  EducationComponent,
  EducationsComponent,
  ProjectComponent,
  ProjectsComponent,
  WorkExperienceComponent,
  WorkExperiencesComponent,
} from './components';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveComponentModule,
    MaterialModule,
    SharedModule,
    HomeRoutingModule,
  ],
  declarations: [
    HomeComponent,
    EducationComponent,
    EducationsComponent,
    ProjectComponent,
    ProjectsComponent,
    WorkExperienceComponent,
    WorkExperiencesComponent,
  ],
})
export class HomeModule {}
