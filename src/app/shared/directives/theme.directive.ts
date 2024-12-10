import { AfterViewInit, Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTheme]'
})
export class ThemeDirective implements AfterViewInit {

  @Input() theme: string = 'light'; // dark ou light

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef) { }

  ngAfterViewInit(): void {
    
    this.elementRef.nativeElement.style.color = this.theme === 'dark' ? 'white' : 'black';
    console.log('Theme Directive', this.elementRef.nativeElement);
  }

}
