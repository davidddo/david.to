import { FirestoreDataConverter } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

/*export const mapDocumentWithId = <T>(action: DocumentChangeAction<T>): T => {
  const id = action.payload.doc.id;
  const data = action.payload.doc.data();

  return { id, ...data };
};

export const mapDocuments = () => {
  return function <T>(source: Observable<DocumentChangeAction<T>[]>) {
    return source.pipe(
      map(actions =>
        actions.map(action => {
          const id = action.payload.doc.id;
          const data = action.payload.doc.data();

          return { id, ...data } as T;
        }),
      ),
    );
  };
};*/

export const firestoreConverter = <T>(): FirestoreDataConverter<T> => {
  return {
    toFirestore: (data: T) => data,
    fromFirestore: (snapsot, options) => {
      const doc = { ...snapsot.data(), id: snapsot.id } as unknown;
      return doc as T;
    },
  };
};
