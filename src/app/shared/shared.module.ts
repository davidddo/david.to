import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@website/material';
import {
  AvatarComponent,
  HistoryComponent,
  HistoryListComponent,
  HistoryItemComponent,
  HistoryContentComponent,
  DateRangeComponent,
  FadeContainerComponent,
  SocialButtonComponent,
  TechnologyChipsComponent,
  ShimmerComponent,
} from './components';

@NgModule({
  declarations: [
    AvatarComponent,
    DateRangeComponent,
    FadeContainerComponent,
    HistoryComponent,
    HistoryListComponent,
    HistoryItemComponent,
    HistoryContentComponent,
    ShimmerComponent,
    SocialButtonComponent,
    TechnologyChipsComponent,
  ],
  imports: [CommonModule, MaterialModule],
  exports: [
    AvatarComponent,
    DateRangeComponent,
    FadeContainerComponent,
    HistoryComponent,
    HistoryListComponent,
    HistoryItemComponent,
    HistoryContentComponent,
    ShimmerComponent,
    SocialButtonComponent,
    TechnologyChipsComponent,
  ],
})
export class SharedModule {}
