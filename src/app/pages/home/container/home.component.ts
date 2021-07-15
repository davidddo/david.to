import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Education, Project, WorkExperience } from '@website/models';
import { ProjectsAction } from '@website/store/projects';
import * as fromProjects from '@website/store/projects';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  projects$: Observable<Project[]>;
  experiences$: Observable<WorkExperience[]>;
  educations: Observable<Education[]>;

  constructor(
    private router: Router,
    private store: Store<fromProjects.State>,
  ) {
    this.projects$ = this.store.pipe(select(fromProjects.selectAllProjects));
  }

  ngOnInit() {
    this.store.dispatch(ProjectsAction.loadProjects());
  }

  openProject(project: Project) {
    this.router.navigate([project.url]);
  }
}
