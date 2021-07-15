import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { createGenericEffect } from '@website/shared/utils';
import { ProjectsAction } from './projects.actions';
import { ProjectsService } from './projects.service';
import * as fromProjects from './projects.reducer';
import {
  catchError,
  concatMap,
  map,
  mergeMap,
  switchMap,
} from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { Project } from '@website/models';

@Injectable()
export class ProjectsEffects {
  loadProjects$ = createGenericEffect(
    ProjectsAction.loadProjects,
    this.projectsService.fetchProjects(),
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
