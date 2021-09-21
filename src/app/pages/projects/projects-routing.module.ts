import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProjectsComponent, SvvHandballComponent } from './containers';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: ProjectsComponent,
        
      },
      {
        path: 'svv-handball',
        component: SvvHandballComponent,
      },
    ]),
  ],
  exports: [RouterModule],
})
export class ProjectsRoutingModule {}
