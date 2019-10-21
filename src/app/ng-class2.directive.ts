import { Directive, Input, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appNgClass2]'
})
export class NgClass2Directive {

  @Input('appNgClass2') value: string;

  constructor(public elementRef: ElementRef) { }

  @HostListener('click')
  receiveEvent() {
    let key = this.value.split(':')[0];
    let value = this.value.split(':')[1];

    this.elementRef.nativeElement.style[key] = value;
    console.log(this.value, this.elementRef, this.elementRef.nativeElement.style[key]);
  }

}
