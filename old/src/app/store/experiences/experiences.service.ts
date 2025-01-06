import { Injectable } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { collection, CollectionReference } from '@firebase/firestore';
import { WorkExperience } from '@website/models';
import { serializeDateRange } from '@website/store/utils';

@Injectable({ providedIn: 'root' })
export class ExperiencesService {
  private collectionRef: CollectionReference<WorkExperience>;

  constructor(firestore: Firestore) {
    this.collectionRef = collection(
      firestore,
      'experiences',
    ).withConverter<WorkExperience>({
      toFirestore: (data: WorkExperience) => data,
      fromFirestore: (snapsot, options) => {
        const data = snapsot.data();

        return {
          ...data,
          id: snapsot.id,
          dateRange: serializeDateRange(data.dateRange),
          sections: data.sections?.map(section => ({
            ...section,
            dateRange: serializeDateRange(section.dateRange),
          })),
        } as WorkExperience;
      },
    });
  }

  fetchWorkExperiences() {
    return collectionData(this.collectionRef);
  }
}
