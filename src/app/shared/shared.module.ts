import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@website/material';
import {
  HistoryComponent,
  HistoryListComponent,
  HistoryItemComponent,
  HistoryContentComponent,
  DateRangeComponent,
  SocialButtonComponent,
  TechstackChipsComponent,
} from './components';

@NgModule({
  declarations: [
    DateRangeComponent,
    HistoryComponent,
    HistoryListComponent,
    HistoryItemComponent,
    HistoryContentComponent,
    SocialButtonComponent,
    TechstackChipsComponent,
  ],
  imports: [CommonModule, MaterialModule],
  exports: [
    DateRangeComponent,
    HistoryComponent,
    HistoryListComponent,
    HistoryItemComponent,
    HistoryContentComponent,
    SocialButtonComponent,
    TechstackChipsComponent,
  ],
})
export class SharedModule {}
