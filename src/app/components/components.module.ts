import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@website/material';
import { PipesModule } from '@website/pipes';
import { AppHeaderComponent } from './app-header';
import { AvatarComponent } from './avatar';
import { DateRangeComponent } from './date-range';
import { EducationComponent, EducationsComponent } from './educations';
import { ExpansionPanelComponent } from './expansion-panel';
import { FadeContainerComponent } from './fade-container';
import { HeaderComponent } from './header';
import {
  HistoryComponent,
  HistoryContentComponent,
  HistoryItemComponent,
  HistoryListComponent,
} from './history';
import { ProjectComponent, ProjectsComponent } from './projects';
import { ShimmerComponent } from './shimmer';
import { SocialButtonComponent } from './social-button';
import { TechnologyChipsComponent } from './technology-chips';
import {
  WorkExperienceComponent,
  WorkExperiencesComponent,
} from './work-experiences';

const components = [
  AppHeaderComponent,
  AvatarComponent,
  DateRangeComponent,
  EducationComponent,
  EducationsComponent,
  ExpansionPanelComponent,
  FadeContainerComponent,
  HeaderComponent,
  HistoryComponent,
  HistoryListComponent,
  HistoryItemComponent,
  HistoryContentComponent,
  ProjectComponent,
  ProjectsComponent,
  ShimmerComponent,
  SocialButtonComponent,
  TechnologyChipsComponent,
  WorkExperienceComponent,
  WorkExperiencesComponent,
];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, MaterialModule, PipesModule],
  exports: [...components],
})
export class ComponentsModule {}
