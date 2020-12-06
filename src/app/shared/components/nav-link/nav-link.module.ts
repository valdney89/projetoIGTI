import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavLinkComponent } from './nav-link.component';

@NgModule({
  declarations: [NavLinkComponent],
  exports: [NavLinkComponent],
  imports: [CommonModule, RouterModule],
})
export class NavLinkModule {}
