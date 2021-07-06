import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@website/material';
import { SharedModule } from '@website/shared';
import { ProjectComponent, WorkExperienceComponent } from './components';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [CommonModule, MaterialModule, SharedModule, HomeRoutingModule],
  declarations: [HomeComponent, ProjectComponent, WorkExperienceComponent],
})
export class HomeModule {}
