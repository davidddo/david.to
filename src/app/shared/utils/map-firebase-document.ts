import { DocumentChangeAction } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export const mapDocumentWithId = <T>(action: DocumentChangeAction<T>): T => {
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
};
