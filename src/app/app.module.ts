import { NgModule } from '@angular/core';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatIconRegistry } from '@angular/material/icon';
import { CoreModule, AppComponent } from '@website/core';
import { AppRoutingModule } from './app-routing.module';
import { AppStoreModule } from './app-store.module';
import { FirebaseModule } from './firebase.module';

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

@NgModule({
  imports: [
    HttpClientModule,
    BrowserAnimationsModule,
    BrowserModule,
    FirebaseModule,
    CoreModule,
    AppStoreModule,
    AppRoutingModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
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
