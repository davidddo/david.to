import { Injectable } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { collection, CollectionReference } from '@firebase/firestore';
import { Education } from '@website/models';
import { firestoreConverter } from '@website/store/utils';

@Injectable({ providedIn: 'root' })
export class EducationsService {
  private collectionRef: CollectionReference<Education>;

  constructor(firestore: Firestore) {
    this.collectionRef = collection(firestore, 'educations').withConverter(
      firestoreConverter<Education>(),
    );
  }

  fetchEducations() {
    return collectionData(this.collectionRef);
  }
}
