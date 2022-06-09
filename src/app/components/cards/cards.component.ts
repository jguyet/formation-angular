import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CardApiService } from 'src/app/shared/services/card-api.service';
import { Observable } from 'rxjs';
import { Card } from 'src/app/shared/models/card';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { CardsOrError } from 'src/app/redux/cards/cards.reducer';
import { getCards, removeCard } from 'src/app/redux/cards/cards.actions';
import { By } from '@angular/platform-browser';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

    public cardsOrError$: Observable<CardsOrError>;

    constructor(private store: Store<{ cards: CardsOrError }>) {
      this.cardsOrError$ = this.store.select('cards');
      this.store.dispatch(getCards());
    }

    ngOnInit() {
    }

    onDelete(cardId: string) {
      console.log(`delete ${cardId}`);
      this.store.dispatch(removeCard({ id: cardId }));
    }
}
