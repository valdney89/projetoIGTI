import { Component, OnInit } from '@angular/core';

import { faHome, faComments, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  faHome = faHome;
  faComments = faComments;
  faUser = faUser;

  constructor() {}

  ngOnInit(): void {}
}
