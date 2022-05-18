import { Injectable } from "@angular/core";
import { CardApiService } from "src/app/shared/services/card-api.service";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { getCards, removeCard, setCards } from "./cards.actions";
import { map, mergeMap, tap } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class CardsEffects {

    effects$ = createEffect(() => this.actions$.pipe(
        ofType(getCards),
        tap(() => console.log('Effect Receive getCards Action')),
        mergeMap(() => this.cardApiService.getCards()),
        map(cards => {
            return setCards({ cards: cards });
        })
      )
    )

    effect$ = createEffect(() => this.actions$.pipe(
        ofType(removeCard),
        tap(() => console.log('Effect Receive removeCard Action')),
        mergeMap((action) => {
            return this.cardApiService.removeCardById(action.id);
        }),
        map((_card) => {
            return getCards();
        })
      )
    )

    constructor(
        private cardApiService: CardApiService,
        private actions$: Actions) {
    }
}