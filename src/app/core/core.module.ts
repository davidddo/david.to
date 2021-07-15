import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './containers';
import { AppFooterComponent, AppHeaderComponent } from './components';

@NgModule({
  declarations: [AppComponent, AppHeaderComponent, AppFooterComponent],
  imports: [RouterModule],
  exports: [AppComponent],
})
export class CoreModule {}
