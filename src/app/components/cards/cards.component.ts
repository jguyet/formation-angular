import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CardApiService } from 'src/app/shared/services/card-api.service';
import { Observable } from 'rxjs';
import { Card } from 'src/app/shared/models/card';
import { Store } from '@ngrx/store';
import { getCards, removeCard } from 'src/app/redux/cards/cards.actions';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

    public cards$: Observable<Card[]>;

    constructor(public store: Store<{ cards: Card[] }>) {
      this.cards$ = store.select('cards');
      this.store.dispatch(getCards());
    }

    ngOnInit() {
    }

    submit() {

    }

    removeCard(cardId: string): void {
      this.store.dispatch(removeCard({ id: cardId }));
    }
}
