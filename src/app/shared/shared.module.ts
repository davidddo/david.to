import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@website/material';
import { HistoryComponent, HistoryItemComponent } from './components';

@NgModule({
  declarations: [HistoryComponent, HistoryItemComponent],
  imports: [CommonModule, MaterialModule],
  exports: [HistoryComponent, HistoryItemComponent],
})
export class SharedModule {}
