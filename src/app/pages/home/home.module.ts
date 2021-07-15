import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@website/material';
import { SharedModule } from '@website/shared';
import { HomeComponent } from './container';
import {
  EducationComponent,
  ExpansionPanelComponent,
  HeaderComponent,
  ProjectComponent,
  WorkExperienceComponent,
} from './components';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  imports: [CommonModule, MaterialModule, SharedModule, HomeRoutingModule],
  declarations: [
    HomeComponent,
    EducationComponent,
    ExpansionPanelComponent,
    HeaderComponent,
    ProjectComponent,
    WorkExperienceComponent,
  ],
})
export class HomeModule {}
