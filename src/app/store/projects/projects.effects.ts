import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { createGenericEffect } from '@website/shared/utils';
import { ProjectsAction } from './projects.actions';
import { ProjectsService } from './projects.service';
import * as fromProjects from './projects.reducer';

@Injectable()
export class ProjectsEffects {
  loadProjects$ = createGenericEffect(
    ProjectsAction.loadProjects,
    this.projectsService.getProjects(),
    {
      success: projects => ProjectsAction.loadProjectsSuccess({ projects }),
      failure: ProjectsAction.loadProjectsFailure(),
      cache: ProjectsAction.loadProjectsCache(),
    },
    this.store.select(fromProjects.selectIsLoaded),
  )(this.actions$);

  constructor(
    private actions$: Actions,
    private store: Store<fromProjects.State>,
    private projectsService: ProjectsService,
  ) {}
}