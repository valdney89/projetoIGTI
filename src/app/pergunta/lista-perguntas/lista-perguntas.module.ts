import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaPerguntasComponent } from './lista-perguntas.component';
import { ListaTwocolsModule } from '../../shared/components/lista-twocols/lista-twocols.module';

@NgModule({
  declarations: [ListaPerguntasComponent],
  imports: [CommonModule, ListaTwocolsModule],
  exports: [ListaPerguntasComponent],
})
export class ListaPerguntasModule {}
