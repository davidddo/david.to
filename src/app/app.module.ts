import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFirePerformanceModule } from '@angular/fire/performance';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { environment } from '@website/environments/environment';
import { CoreModule, AppComponent } from '@website/core';
import { MaterialModule } from '@website/material';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    HttpClientModule,
    BrowserAnimationsModule,
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirePerformanceModule,
    AngularFireAnalyticsModule,
    MaterialModule,
    CoreModule,
    AppRoutingModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
