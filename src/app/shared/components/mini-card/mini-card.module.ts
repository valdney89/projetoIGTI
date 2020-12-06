import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MiniCardComponent } from './mini-card.component';

@NgModule({
  declarations: [MiniCardComponent],
  exports: [MiniCardComponent],
  imports: [CommonModule],
})
export class MiniCardModule {}
