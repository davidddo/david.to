import { Injectable } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { collection, CollectionReference } from '@firebase/firestore';
import { Education } from '@website/models';
import { serializeDateRange } from '@website/store/utils';

@Injectable({ providedIn: 'root' })
export class EducationsService {
  private collectionRef: CollectionReference<Education>;

  constructor(firestore: Firestore) {
    this.collectionRef = collection(
      firestore,
      'educations',
    ).withConverter<Education>({
      toFirestore: (data: Education) => data,
      fromFirestore: (snapsot, options) => {
        const data = snapsot.data();

        return {
          ...data,
          id: snapsot.id,
          dateRange: serializeDateRange(data.dateRange),
        } as Education;
      },
    });
  }

  fetchEducations() {
    return collectionData(this.collectionRef);
  }
}
