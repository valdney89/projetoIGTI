import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-link',
  templateUrl: './nav-link.component.html',
  styleUrls: ['./nav-link.component.css'],
})
export class NavLinkComponent {
  @Input() recebeNavs: any[];
}
