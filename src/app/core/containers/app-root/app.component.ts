import { animate, style, transition, trigger } from '@angular/animations';
import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
} from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

const icons = [
  {
    tag: 'github',
    file: 'github.svg',
  },
  {
    tag: 'linkedin',
    file: 'linkedin.svg',
  },
  {
    tag: 'xing',
    file: 'xing.svg',
  },
];

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
  showHeader: boolean = false;

  @HostListener('window:scroll')
  onWindowScroll() {
    if (window.scrollY >= 280) {
      this.showHeader = true;
    } else {
      this.showHeader = false;
    }
  }

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
  ) {
    for (const icon of icons) {
      this.matIconRegistry.addSvgIcon(
        icon.tag,
        this.domSanitizer.bypassSecurityTrustResourceUrl(
          `../assets/icons/${icon.file}`,
        ),
      );
    }
  }
}
