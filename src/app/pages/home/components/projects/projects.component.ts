import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Project } from '@website/models';
import { Observable } from 'rxjs';
import { ProjectsAction } from '@website/store/projects';
import * as fromProjects from '@website/store/projects';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent implements OnInit {
  projects$: Observable<Project[]>;
  placeholders = 6;

  constructor(private store: Store<fromProjects.State>) {
    this.projects$ = this.store.pipe(select(fromProjects.selectAll));
  }

  ngOnInit() {
    this.store.dispatch(ProjectsAction.loadProjects());
  }
}
