import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.css'],
})
export class SplashScreenComponent implements OnInit {
  banners = [
    {
      url: '../../assets/app_telemedicina.png',
      alt: 'app medico online',
      title: 'Pediatras Online',
      description:
        'Mussum Ipsum, cacilds vidis litro abertis. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Nec orci ornare consequat. ',
    },
    {
      url: '../../assets/app_telemedicina.png',
      alt: 'app medico online',
      title: 'banner 2',
      description:
        'Mussum Ipsum, cacilds vidis litro abertis. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Nec orci ornare consequat. ',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
