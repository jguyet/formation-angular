import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { Card } from 'src/app/shared/models/card';
import { CardApiService } from 'src/app/shared/services/card-api.service';
import { getCards, setCards, setCardsError, deleteOneCard, deleteOneCardError  } from '../card-actions';

@Injectable({
  providedIn: 'root'
})
export class CardEffectsService {

  loadCards$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCards),
      mergeMap(() => {
        console.log('effect');
        let card = new Card('t1', 'djdjdj', 10, '500');
        card.id = 'dididi';
        return of([card])//this.cardApiService.getCards()
        .pipe(
          map(cards => (setCards({ cards: cards }))),
          catchError(() => of(setCardsError()))
        )
      })
    )
  );

  removeCard$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteOneCard),
      mergeMap((action) => {
        console.log('effect delete');
        return this.cardApiService.deleteOneCard(action.cardId)
        .pipe(
          map((_card) => (getCards())),
          catchError(() => of(deleteOneCardError()))
        )
      })
    )
  );
 
  constructor(
    private actions$: Actions,
    private cardApiService: CardApiService
  ) {}
}
