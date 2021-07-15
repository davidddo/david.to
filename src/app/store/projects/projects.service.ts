import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { Project } from '@website/models';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ProjectsService {
  projectsRef: AngularFirestoreCollection<Project>;

  constructor(private firestore: AngularFirestore) {
    this.projectsRef = this.firestore.collection('projects');
  }

  getProjects() {
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
