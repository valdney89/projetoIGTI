import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ShowIfLoggedModule } from './../../shared/directives/show-if-logged/show-if-logged.module';

@NgModule({
  declarations: [FooterComponent],
  exports: [FooterComponent],
  imports: [CommonModule, FontAwesomeModule, RouterModule, ShowIfLoggedModule],
})
export class FooterModule {}
