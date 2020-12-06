import { Directive, Renderer2, OnInit } from '@angular/core';
import { ElementRef } from '@angular/core';
import {
  Router,
  ActivatedRoute,
  Params,
  RoutesRecognized,
} from '@angular/router';

@Directive({
  selector: '[showIfLogged]',
})
export class ShowIfLoggedDirective implements OnInit {
  currentDisplay: string;
  currentUrl: string;

  constructor(
    private element: ElementRef<any>,
    private renderer: Renderer2,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.currentDisplay = getComputedStyle(this.element.nativeElement).display;

    this.router.events.subscribe((val) => {
      if (val instanceof RoutesRecognized) {
        this.currentUrl = val.state.root.firstChild.routeConfig.path;
        if (this.verificaPaginasPublicas()) {
          this.renderer.setStyle(this.element.nativeElement, 'display', 'none');
        } else {
          this.renderer.setStyle(
            this.element.nativeElement,
            'display',
            this.currentDisplay
          );
        }
      }
    });
  }

  verificaPaginasPublicas() {
    if (
      this.currentUrl === 'login' ||
      this.currentUrl === 'start' ||
      this.currentUrl === 'cadastrar'
    ) {
      return true;
    } else {
      return false;
    }
  }
}
