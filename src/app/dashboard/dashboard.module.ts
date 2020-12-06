import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';
import { CarouselModule } from '../shared/components/carousel/carousel.module';
import { NavLinkModule } from '../shared/components/nav-link/nav-link.module';
import { MiniCardModule } from '../shared/components/mini-card/mini-card.module';
import { DashboardService } from './dashboard.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [DashboardComponent],
  exports: [DashboardComponent],
  imports: [
    CommonModule,
    CarouselModule,
    NavLinkModule,
    MiniCardModule,
    FontAwesomeModule,
  ],
  providers: [DashboardService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DashboardModule {}
