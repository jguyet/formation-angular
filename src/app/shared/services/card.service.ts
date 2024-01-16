import { Injectable } from '@angular/core';
import { Card } from '../dto/card';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  constructor() { }

  getCards(): Promise<Card[]> {

    return Promise.resolve([ // factice
      new Card('Pot de miel jaune', '', 10, 'yellow'),
      new Card('Pot de miel bleu', '', 15, 'blue'),
      new Card('Pot de miel vert', '', 1, 'green'),
      new Card('Pot de miel rouge', '', 20, 'red')
    ]);
  }
}
