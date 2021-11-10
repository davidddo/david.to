import { Injectable } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { collection, CollectionReference } from '@firebase/firestore';
import { Project } from '@website/models';
import { firestoreConverter } from '@website/shared/utils';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ProjectsService {
  private collectionRef: CollectionReference<Project>;

  constructor(firestore: Firestore) {
    this.collectionRef = collection(firestore, 'projects').withConverter(
      firestoreConverter<Project>(),
    );
  }

  fetchProjects() {
    return collectionData(this.collectionRef).pipe(tap(console.log));
  }
}
