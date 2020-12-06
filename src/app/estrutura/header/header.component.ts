import { Component, OnInit } from '@angular/core';
import { faChevronLeft, faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  faChevronLeft = faChevronLeft;
  faBars = faBars;

  constructor() {}

  ngOnInit(): void {}
}
