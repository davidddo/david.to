import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppComponent } from '@website/core';
import { AppModule } from './app.module';

@NgModule({
  imports: [ServerModule, AppModule],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
