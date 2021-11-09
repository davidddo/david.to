import { animate, style, transition, trigger } from '@angular/animations';
import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppHeaderService } from '@website/core/services';
import { Observable } from 'rxjs';
import * as fromRoot from '@website/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({ height: '0px', opacity: 0 }),
        animate(
          '280ms cubic-bezier(0.4, 0, 0.2, 1)',
          style({ height: '64px', opacity: 1 }),
        ),
      ]),
      transition(':leave', [
        style({ height: '64px', opacity: 1 }),
        animate(
          '280ms cubic-bezier(0.4, 0, 0.2, 1)',
          style({ height: '0px', opacity: 0 }),
        ),
      ]),
    ]),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  showHeader$: Observable<boolean>;
  showHeader: boolean;

  @HostListener('window:scroll')
  onWindowScroll() {
    if (window.scrollY >= 280) {
      this.showHeader = true;
    } else {
      this.showHeader = false;
    }
  }

  constructor(
    private store: Store<fromRoot.State>,
    private router: Router,

    private appHeaderService: AppHeaderService,
  ) {
    // this.showHeader$ =
  }
}
