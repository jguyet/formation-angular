import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverItem]',
  standalone: true
})
export class HoverItemDirective {

  constructor(public renderer: Renderer2, public elementRef: ElementRef) { }

  @HostListener('mouseover')
  onMouseOver() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'red');
  }

  @HostListener('mouseout')
  onMouseExit() {
    this.renderer.removeStyle(this.elementRef.nativeElement, 'color');
  }

}
