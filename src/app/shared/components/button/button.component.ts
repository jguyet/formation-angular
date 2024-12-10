import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

/**
 * Exemple d'utilisation de button
 * <app-button label="Login" (eventClick)="myFunction()" ></app-button>
 */
@Component({
    selector: 'app-button',
    imports: [],
    templateUrl: './button.component.html',
    styleUrl: './button.component.css',
})
export class ButtonComponent implements OnInit, OnChanges {
    @Input() label = '';

    @Output() eventClick = new EventEmitter<boolean>();

    constructor() {
        console.log('[constructor] ButtonComponent label =', this.label);
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['label'].firstChange) {
            console.log('[ngOnChanges] ButtonComponent label =', this.label, changes);
        }
    }

    ngOnInit(): void {
        console.log('[ngOnInit] ButtonComponent label =', this.label);
    }

    click() {
        console.log('[ButtonComponent] click');
        this.eventClick.emit(true);
    }
}
