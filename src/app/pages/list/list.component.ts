import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { CardService } from '../../shared/services/card.service';
import { Card } from '../../shared/models/card';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-list',
    imports: [CommonModule, SharedModule],
    templateUrl: './list.component.html',
    styleUrl: './list.component.css',
})
export class ListComponent implements OnInit {
    listOfCards = new Observable<Card[]>();

    constructor(public cardService: CardService) {}

    ngOnInit(): void {
        this.listOfCards = this.cardService.getCards();
    }
}
