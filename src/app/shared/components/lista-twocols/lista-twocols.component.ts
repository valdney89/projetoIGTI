import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lista-twocols',
  templateUrl: './lista-twocols.component.html',
  styleUrls: ['./lista-twocols.component.css'],
})
export class ListaTwocolsComponent implements OnInit {
  @Input() id;

  constructor() {}

  ngOnInit(): void {}
}
