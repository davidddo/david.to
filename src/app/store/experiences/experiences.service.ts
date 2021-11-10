import { Injectable } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { collection, CollectionReference } from '@firebase/firestore';
import { WorkExperience } from '@website/models';
import { firestoreConverter } from '@website/shared/utils';

@Injectable({ providedIn: 'root' })
export class ExperiencesService {
  private collectionRef: CollectionReference<WorkExperience>;

  constructor(firestore: Firestore) {
    this.collectionRef = collection(firestore, 'experiences').withConverter(
      firestoreConverter<WorkExperience>(),
    );
  }

  fetchWorkExperiences() {
    return collectionData(this.collectionRef);
  }
}
