import { Component, OnInit } from '@angular/core';
import { CardApiService } from 'src/app/shared/services/card-api.service';
import { Observable } from 'rxjs';
import { Card } from 'src/app/shared/models/card';
import { Store } from '@ngrx/store';
import { CardsOrErrorState } from 'src/app/redux/cards/cards.reducer';
import { getCards } from 'src/app/redux/cards/cards.actions';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {

    public cardsOrError$: Observable<CardsOrErrorState>;

    constructor(private store: Store<{ cards: CardsOrErrorState }>) {
      this.cardsOrError$ = this.store.select('cards');
      this.store.dispatch(getCards());
    }

}
