import { Component } from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-ver-pergunta',
  templateUrl: './ver-pergunta.component.html',
  styleUrls: ['./ver-pergunta.component.css'],
})
export class VerPerguntaComponent {
  faArrowRight = faArrowRight;

  constructor() {}
}
