import { FirestoreDataConverter } from '@angular/fire/firestore';
import { DateRange } from '@website/models';

export const serializeDateRange = (range: any): DateRange => {
  return {
    ...range,
    start: range.start?.toDate().toString(),
    end: range.end?.toDate().toString(),
  };
};

export const firestoreConverter = <T>(): FirestoreDataConverter<T> => {
  return {
    toFirestore: (data: T) => data,
    fromFirestore: (snapsot, options) => {
      const doc = { ...snapsot.data(), id: snapsot.id } as unknown;
      return doc as T;
    },
  };
};
