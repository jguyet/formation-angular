import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './shared/components/card/card.component';

@Component({
    selector: 'app-root',
    imports: [
        RouterModule,
        HeaderComponent,
        CardComponent
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent {}
