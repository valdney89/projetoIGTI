import { VerPerguntaModule } from './ver-pergunta/ver-pergunta.module';
import { NgModule } from '@angular/core';
import { ListaPerguntasModule } from './lista-perguntas/lista-perguntas.module';
import { NovaPerguntaModule } from './nova-pergunta/nova-pergunta.module';

@NgModule({
  imports: [ListaPerguntasModule, NovaPerguntaModule, VerPerguntaModule],
})
export class PerguntaModule {}
