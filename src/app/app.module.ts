import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SplashScreenModule } from './splash-screen/splash-screen.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SplashScreenModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
