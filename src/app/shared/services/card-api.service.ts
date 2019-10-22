import { Injectable } from '@angular/core';
import { Card } from '../models/Card';

@Injectable({
  providedIn: 'root'
})
export class CardApiService {

  constructor() { }

  public getCards(): Promise<Card[]> {
    return Promise.resolve([
      new Card('blue', 'gelee bleu', 10),
      new Card('red', 'gelee rouge', 10),
      new Card('orange', 'gelee orange', 10),
      new Card('green', 'gelee verte', 10)
    ]);
  }
}
