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
  ExpansionPanelComponent,
  HeaderComponent,
} from './components';
import { FillPipe } from './pipes';

const components = [
  AvatarComponent,
  DateRangeComponent,
  ExpansionPanelComponent,
  FadeContainerComponent,
  HeaderComponent,
  HistoryComponent,
  HistoryListComponent,
  HistoryItemComponent,
  HistoryContentComponent,
  ShimmerComponent,
  SocialButtonComponent,
  TechnologyChipsComponent,
];

const pipes = [FillPipe];

@NgModule({
  declarations: [...components, ...pipes],
  imports: [CommonModule, MaterialModule],
  exports: [...components, ...pipes],
})
export class SharedModule {}
