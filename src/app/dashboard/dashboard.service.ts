import { Injectable } from '@angular/core';

@Injectable()
export class DashboardService {
  getUser() {
    return {
      name: 'Valdney Nogueira',
      rank: '9.5',
      historico: [
        {
          nome: 'Perguntas',
          total: 150,
        },
        {
          nome: 'Recomendações',
          total: 20,
        },
        {
          nome: 'Médicos Cadastrados',
          total: 6,
        },
      ],
    };
  }
  getHistorico() {
    return this.getUser().historico;
  }
}
