import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { Project } from '@website/models';
import { mapDocuments } from '@website/shared/utils';

@Injectable({ providedIn: 'root' })
export class ProjectsService {
  private projectsRef: AngularFirestoreCollection<Project>;

  constructor(private firestore: AngularFirestore) {
    this.projectsRef = this.firestore.collection('projects');
  }

  fetchProjects() {
    return this.projectsRef.snapshotChanges().pipe(mapDocuments());
  }
}
