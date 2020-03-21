import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appAnimate]'
})
export class AnimateDirective {

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  @HostListener('click')
  action() {
    this.renderer.setStyle(this.el.nativeElement, 'color', 'red');
    this.renderer.setStyle(this.el.nativeElement, 'background-color', 'black');

  }
}
