import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule, AppComponent } from '@website/core';
import { MaterialModule } from '@website/material';
import { AppRoutingModule } from './app-routing.module';
import { AppStoreModule } from './app-store.module';
import { FirebaseModule } from './firebase.module';

@NgModule({
  imports: [
    HttpClientModule,
    BrowserAnimationsModule,
    BrowserModule,
    FirebaseModule,
    MaterialModule,
    CoreModule,
    AppStoreModule,
    AppRoutingModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
