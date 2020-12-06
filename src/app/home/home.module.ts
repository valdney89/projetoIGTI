import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SigninComponent } from './signin/signin.component';
import { SplashScreenComponent } from './splashScreen/splash-screen.component';
import { SignupComponent } from './signup/signup.component';
//import { HomeRoutingModule } from './home.routing.module';

@NgModule({
  declarations: [SplashScreenComponent, SigninComponent, SignupComponent],
  exports: [SplashScreenComponent, SigninComponent, SignupComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    RouterModule,
    //HomeRoutingModule,
  ],
})
export class HomeModule {}
