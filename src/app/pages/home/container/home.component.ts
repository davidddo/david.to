import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Education, Project, WorkExperience } from '@website/models';
import { ProjectsAction } from '@website/store/projects';
import { ExperiencesAction } from '@website/store/experiences';
import { EducationsAction } from '@website/store/educations';
import * as fromProjects from '@website/store/projects';
import * as fromExperiences from '@website/store/experiences';
import * as fromEducations from '@website/store/educations';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  projects$: Observable<Project[]>;
  experiences$: Observable<WorkExperience[]>;
  educations$: Observable<Education[]>;

  constructor(
    private store: Store<
      fromProjects.State & fromExperiences.State & fromEducations.State
    >,
  ) {
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
