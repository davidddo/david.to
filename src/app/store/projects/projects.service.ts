import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { Store } from '@ngrx/store';
import { Project } from '@website/models';
import { map, mergeMap, switchMap, take } from 'rxjs/operators';
import { ProjectsAction } from './projects.actions';
import * as fromProjects from './projects.reducer';

@Injectable({ providedIn: 'root' })
export class ProjectsService {
  private projectsRef: AngularFirestoreCollection<Project>;

  constructor(private firestore: AngularFirestore) {
    this.projectsRef = this.firestore.collection('projects');
  }

  fetchProjects() {
    return this.projectsRef.snapshotChanges().pipe(
      map(actions => {
        return actions.map<Project>(action => {
          const id = action.payload.doc.id;
          const data = action.payload.doc.data() as Project;

          return { id, ...data };
        });
      }),
    );
  }
}
