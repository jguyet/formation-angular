import { Injectable } from '@angular/core';
import { Card } from '../models/card';

@Injectable({
  providedIn: 'root'
})
export class CardService {

    private cards = Promise.resolve([
        new Card('1', 'Miel bleu', 'description', 10, 'blue'),
        new Card('2', 'Miel rouge', 'description', 10, 'red'),
        new Card('3', 'Miel jaune', 'description', 10, 'yellow')
    ]);

    public getCards(): Promise<Card[]> {
        return this.cards;
    }

    public getCard(id: string): Promise<Card> {
        return this.cards.then(x => x[id]);
    }
}
