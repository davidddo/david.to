import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DateRangePipe } from './date-range.pipe';
import { FillPipe } from './fill.pipe';
import { FormatDatePipe } from './format-date.pipe';

const pipes = [DateRangePipe, FillPipe, FormatDatePipe];

@NgModule({
  declarations: [...pipes],
  imports: [CommonModule],
  exports: [...pipes],
})
export class PipesModule {}
