import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@website/material';
import { SharedModule } from '@website/shared';
import { SvvHandballComponent } from './container';
import { SvvHandballRoutingModule } from './svv-handball-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    SvvHandballRoutingModule,
  ],
  declarations: [SvvHandballComponent],
})
export class SvvHandballModule {}
