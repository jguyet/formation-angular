import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
    selector: '[appTheme]',
})
export class ThemeDirective implements AfterViewInit {
    @Input() theme = 'light'; // dark ou light

    constructor(private elementRef: ElementRef) {}

    ngAfterViewInit(): void {
        this.elementRef.nativeElement.style.color = this.theme === 'dark' ? 'white' : 'black';
        console.log('Theme Directive', this.elementRef.nativeElement);
    }
}
