import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { Education, WorkExperience, Project } from '@website/models';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class DataService {
  projectsRef: AngularFirestoreCollection<Project>;
  educationsRef: AngularFirestoreCollection<Education>;
  experiencesRef: AngularFirestoreCollection<WorkExperience>;

  constructor(private firestore: AngularFirestore) {
    this.projectsRef = this.firestore.collection('projects');
    this.experiencesRef = this.firestore.collection('experiences');
  }

  getProjects() {
    return this.projectsRef.valueChanges().pipe(tap(a => console.log(a)));
  }

  getExperiences() {
    return this.experiencesRef.valueChanges();
  }
}
