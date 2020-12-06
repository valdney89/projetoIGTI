import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ShowIfLoggedModule } from './../../shared/directives/show-if-logged/show-if-logged.module';

@NgModule({
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  imports: [CommonModule, FontAwesomeModule, RouterModule, ShowIfLoggedModule],
})
export class HeaderModule {}
