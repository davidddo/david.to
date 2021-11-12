import { animate, style, transition, trigger } from '@angular/animations';
import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
} from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { Education, Project, WorkExperience } from '@website/models';
import { ProjectsAction } from '@website/store/projects';
import { ExperiencesAction } from '@website/store/experiences';
import { EducationsAction } from '@website/store/educations';

import * as fromProjects from '@website/store/projects';
import * as fromExperiences from '@website/store/experiences';
import * as fromEducations from '@website/store/educations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({ height: '0px', opacity: 0 }),
        animate(
          '280ms cubic-bezier(0.4, 0, 0.2, 1)',
          style({ height: '64px', opacity: 1 }),
        ),
      ]),
      transition(':leave', [
        style({ height: '64px', opacity: 1 }),
        animate(
          '280ms cubic-bezier(0.4, 0, 0.2, 1)',
          style({ height: '0px', opacity: 0 }),
        ),
      ]),
    ]),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  projects$: Observable<Project[]>;
  experiences$: Observable<WorkExperience[]>;
  educations$: Observable<Education[]>;

  showHeader: boolean;

  @HostListener('window:scroll')
  onWindowScroll() {
    if (window.scrollY >= 156) {
      this.showHeader = true;
    } else {
      this.showHeader = false;
    }
  }

  constructor(private store: Store<fromEducations.State>) {
    this.projects$ = this.store.pipe(select(fromProjects.selectAll));
    this.experiences$ = this.store.pipe(select(fromExperiences.selectAll));
    this.educations$ = this.store.pipe(select(fromEducations.selectAll));
  }

  ngOnInit() {
    this.store.dispatch(ProjectsAction.loadProjects());
    this.store.dispatch(ExperiencesAction.loadExperiences());
    this.store.dispatch(EducationsAction.loadEducations());
  }
}
