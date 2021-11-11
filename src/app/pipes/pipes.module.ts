import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FillPipe } from './fill.pipe';

@NgModule({
  declarations: [FillPipe],
  imports: [CommonModule],
  exports: [FillPipe],
})
export class PipesModule {}
