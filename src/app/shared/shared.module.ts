import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@website/material';
import {
  HistoryComponent,
  HistoryListComponent,
  HistoryItemComponent,
  HistoryContentComponent,
  DateRangeComponent,
  TechstackChipsComponent,
} from './components';

@NgModule({
  declarations: [
    DateRangeComponent,
    HistoryComponent,
    HistoryListComponent,
    HistoryItemComponent,
    HistoryContentComponent,
    TechstackChipsComponent,
  ],
  imports: [CommonModule, MaterialModule],
  exports: [
    DateRangeComponent,
    HistoryComponent,
    HistoryListComponent,
    HistoryItemComponent,
    HistoryContentComponent,
    TechstackChipsComponent,
  ],
})
export class SharedModule {}
