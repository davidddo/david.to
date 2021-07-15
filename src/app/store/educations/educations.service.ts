import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { Education } from '@website/models';
import { mapDocuments } from '@website/shared/utils';

@Injectable({ providedIn: 'root' })
export class EducationsService {
  private educationsRef: AngularFirestoreCollection<Education>;

  constructor(private firestore: AngularFirestore) {
    this.educationsRef = this.firestore.collection('educations');
  }

  fetchEducations() {
    return this.educationsRef.snapshotChanges().pipe(mapDocuments());
  }
}
