import { Injectable } from '@angular/core';

@Injectable()
export class ListaPerguntasService {
  getPerguntas() {
    return [
      {
        id: '1',
        data: new Date(2020, 11, 1),
        assunto: 'Dentição',
        pergunta: 'Pergunta feita',
        resposta: 'Resposta Dada',
        respostaBy: 'Maria Silva',
      },
      {
        id: '2',
        data: new Date(2020, 10, 1),
        assunto: 'Alimentação',
        pergunta: 'Pergunta feita 02',
        resposta: 'Resposta Dada -2',
        respostaBy: 'Ronaldo Carneiro',
      },
    ];
  }
}
