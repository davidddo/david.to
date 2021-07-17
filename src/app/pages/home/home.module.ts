import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@website/material';
import { SharedModule } from '@website/shared';
import { HomeComponent } from './container';
import {
  EducationComponent,
  EducationsComponent,
  ExpansionPanelComponent,
  HeaderComponent,
  ProjectComponent,
  ProjectsComponent,
  WorkExperienceComponent,
  WorkExperiencesComponent,
} from './components';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  imports: [CommonModule, MaterialModule, SharedModule, HomeRoutingModule],
  declarations: [
    HomeComponent,
    EducationComponent,
    EducationsComponent,
    ExpansionPanelComponent,
    HeaderComponent,
    ProjectComponent,
    ProjectsComponent,
    WorkExperienceComponent,
    WorkExperiencesComponent,
  ],
})
export class HomeModule {}
