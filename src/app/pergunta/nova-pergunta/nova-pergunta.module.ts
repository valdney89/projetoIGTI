import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NovaPerguntaComponent } from './nova-pergunta.component';

@NgModule({
  declarations: [NovaPerguntaComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [NovaPerguntaComponent],
})
export class NovaPerguntaModule {}
