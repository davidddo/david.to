import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@website/material';
import { SharedModule } from '@website/shared';
import { ProjectsComponent } from './containers';
import { ProjectsRoutingModule } from './projects-routing.module';

@NgModule({
  imports: [CommonModule, MaterialModule, SharedModule, ProjectsRoutingModule],
  declarations: [ProjectsComponent],
})
export class ProjectsModule {}
