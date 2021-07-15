import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@website/material';
import { SharedModule } from '@website/shared';
import { AppFooterComponent, AppHeaderComponent } from './components';
import { AppComponent } from './containers';

@NgModule({
  declarations: [AppComponent, AppHeaderComponent, AppFooterComponent],
  imports: [CommonModule, RouterModule, MaterialModule, SharedModule],
  exports: [AppComponent],
})
export class CoreModule {}
