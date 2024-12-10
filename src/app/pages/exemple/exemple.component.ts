import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-exemple',
    imports: [CommonModule],
    templateUrl: './exemple.component.html',
    styleUrl: './exemple.component.css',
})
export class ExempleComponent {
    status = true;
}
