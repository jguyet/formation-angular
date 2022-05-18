import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHoverEffect]'
})
export class HoverEffectDirective implements OnInit {

  @Input('appHoverEffect') data: string;

  constructor(private elementRef: ElementRef) {
  }

  ngOnInit(): void {
      console.log('hover-effect', this.data);
  }

  @HostListener('mouseover')
  callMe(): void {
    this.elementRef.nativeElement.style.color = 'green';
  }

  @HostListener('mouseout')
  callMe2(): void {
    this.elementRef.nativeElement.style.color = 'black';
  }

}
