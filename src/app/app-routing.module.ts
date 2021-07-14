import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then(m => m.HomeModule),
    pathMatch: 'full',
  },
  {
    path: 'svv-handball',
    loadChildren: () =>
      import('./pages/svv-handball/svv-handball.module').then(
        m => m.SvvHandballModule,
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
