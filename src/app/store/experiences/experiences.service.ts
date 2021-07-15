import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { WorkExperience } from '@website/models';
import { mapDocuments } from '@website/shared/utils';

@Injectable({ providedIn: 'root' })
export class ExperiencesService {
  private experiencesRef: AngularFirestoreCollection<WorkExperience>;

  constructor(private firestore: AngularFirestore) {
    this.experiencesRef = this.firestore.collection('experiences');
  }

  fetchWorkExperiences() {
    return this.experiencesRef.snapshotChanges().pipe(mapDocuments());
  }
}
