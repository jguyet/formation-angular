import { Component, OnInit } from '@angular/core';
import { CardApiService } from 'src/app/shared/services/card-api.service';
import { Observable } from 'rxjs';
import { Card } from 'src/app/shared/models/card';
import { Store } from '@ngrx/store';
import { deleteOneCard, getCards } from 'src/app/redux/card-actions';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

    public cards$: Observable<Card[]>;

    constructor(private store: Store<{ cards: Card[] }>) {
      this.cards$ = store.select('cards');
      store.dispatch(getCards());
    }

    ngOnInit() {
      // this.cards$ = this.cardApiService.getCards();
    }

    delete(cardId: string) {
      this.store.dispatch(deleteOneCard({ cardId: cardId }));
    }
}
