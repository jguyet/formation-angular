import { Component } from '@angular/core';
import { CardService } from '../shared/services/card.service';
import { Card } from '../shared/models/card';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [CardService]
})
export class HomeComponent {

    public title = 'Botick';
    public version = '1.0';

    constructor(private cardService: CardService) { }

    public getCards(): Promise<Card[]> {
        return this.cardService.getCards();
    }

}
