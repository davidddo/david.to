import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './containers';
import { AppFooterComponent, AppHeaderComponent } from './components';
import { DataService } from './services';

@NgModule({
  declarations: [AppComponent, AppHeaderComponent, AppFooterComponent],
  imports: [RouterModule],
  exports: [AppComponent],
  providers: [DataService],
})
export class CoreModule {}
