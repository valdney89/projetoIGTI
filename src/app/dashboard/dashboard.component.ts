import { Component, OnInit } from '@angular/core';

import { DashboardService } from './dashboard.service';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  faStar = faStar;

  banners = [
    {
      title: 'Imagem 01',
      subtitle: 'Subtitle Imagem 01',
      url: 'https://picsum.photos/id/944/900/500',
      description: 'Description Imagem 01',
    },
    {
      title: 'Imagem 02',
      subtitle: 'Subtitle Imagem 02',
      url: 'https://picsum.photos/id/1011/900/500',
      description: 'Description Imagem 02',
    },
  ];

  navs = [
    {
      title: 'Médico Disponível',
      url: '/pergunta/nova',
    },
    {
      title: 'Meu Médico Particular',
      url: '/pergunta/nova',
    },
    {
      title: 'Urgente (até 5min)',
      url: '/pergunta/nova',
    },
  ];

  historico = [];
  user: any;
  dashboardService: DashboardService;

  constructor() {
    this.dashboardService = new DashboardService();
  }

  ngOnInit(): void {
    this.user = this.dashboardService.getUser();
    this.historico = this.dashboardService.getHistorico();
  }
}
