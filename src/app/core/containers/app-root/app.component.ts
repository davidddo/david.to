import { Component } from '@angular/core';
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
})
export class AppComponent {
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
