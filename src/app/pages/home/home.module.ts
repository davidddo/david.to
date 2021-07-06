import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@website/material';
import {
  ProjectComponent,
  ProjectsComponent,
  WorkExperiencesComponent,
} from './components';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [CommonModule, MaterialModule, HomeRoutingModule],
  declarations: [
    HomeComponent,
    ProjectComponent,
    ProjectsComponent,
    WorkExperiencesComponent,
  ],
})
export class HomeModule {}
