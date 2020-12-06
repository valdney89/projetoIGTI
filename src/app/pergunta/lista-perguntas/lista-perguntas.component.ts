import { Component, OnInit } from '@angular/core';
import { ListaPerguntasService } from './lista-perguntas.service';

@Component({
  selector: 'app-lista-perguntas',
  templateUrl: './lista-perguntas.component.html',
  styleUrls: ['./lista-perguntas.component.css'],
})
export class ListaPerguntasComponent implements OnInit {
  listaPerguntasService: ListaPerguntasService;
  listaPerguntas: any;

  constructor() {
    this.listaPerguntasService = new ListaPerguntasService();
  }

  ngOnInit(): void {
    this.listaPerguntas = this.listaPerguntasService.getPerguntas();
  }
}
