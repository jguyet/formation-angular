import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appApplyColor]'
})
export class ApplyColorDirective implements AfterViewInit {

  @Input("appApplyColor") value: string;

  constructor(private elementRef: ElementRef) {
  }

  ngAfterViewInit(): void {
    this.elementRef.nativeElement.style.color = this.value;
  }

}
