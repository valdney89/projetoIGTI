import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VerPerguntaComponent } from './ver-pergunta.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ModalModule } from './../../shared/components/modal/modal.module';

@NgModule({
  declarations: [VerPerguntaComponent],
  imports: [CommonModule, FontAwesomeModule, ModalModule],
  exports: [VerPerguntaComponent],
})
export class VerPerguntaModule {}
