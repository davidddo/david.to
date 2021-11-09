import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AppHeaderService {
  showHeader$: Observable<boolean>;

  showStaticHeader() {}
}
