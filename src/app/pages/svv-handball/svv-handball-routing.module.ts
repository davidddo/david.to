import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SvvHandballComponent } from './container';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: SvvHandballComponent,
      },
    ]),
  ],
  exports: [RouterModule],
})
export class SvvHandballRoutingModule {}
