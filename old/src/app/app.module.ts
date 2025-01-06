import { NgModule } from '@angular/core';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatIconRegistry } from '@angular/material/icon';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getAnalytics, provideAnalytics } from '@angular/fire/analytics';
import { environment } from '@website/environments/environment';
import { ComponentsModule } from './components';
import {
  ROOT_REDUCERS,
  ExperiencesStoreModule,
  EducationsStoreModule,
  ProjectsStoreModule,
} from './store';
import { AppComponent } from './app.component';

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
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideAnalytics(() => getAnalytics()),
    StoreModule.forRoot(ROOT_REDUCERS, {
      runtimeChecks: {
        strictStateSerializability: true,
        strictActionSerializability: false,
        strictActionWithinNgZone: true,
        strictActionTypeUniqueness: true,
      },
    }),
    EffectsModule.forRoot(),
    StoreDevtoolsModule.instrument({
      name: 'Personal Website',
      logOnly: environment.production,
    }),
    ExperiencesStoreModule,
    EducationsStoreModule,
    ProjectsStoreModule,
    ComponentsModule,
  ],
  declarations: [AppComponent],
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
