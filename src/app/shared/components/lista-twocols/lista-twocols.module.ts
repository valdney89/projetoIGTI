import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaTwocolsComponent } from './lista-twocols.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ListaTwocolsComponent],
  exports: [ListaTwocolsComponent],
  imports: [CommonModule, RouterModule],
})
export class ListaTwocolsModule {}
