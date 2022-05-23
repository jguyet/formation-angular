import { Injectable } from "@angular/core";
import { CardApiService } from "src/app/shared/services/card-api.service";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { getCards, removeCard, setCards, setErrors } from "./cards.actions";
import { catchError, map, mergeMap, tap } from "rxjs/operators";
import { of } from "rxjs";

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
        }),
        catchError(() => {
            return of(setErrors({ errors: ['Api offline'] }));
        })
      )
    )

    effect$ = createEffect(() => this.actions$.pipe(
        ofType(removeCard),
        tap(() => console.log('Effect Receive removeCard Action')),
        mergeMap((action) => {
            return this.cardApiService.removeCardById(action.id);
        }),
        catchError(() => {
            return of(setErrors({ errors: ['Already removed'] }));
        }),
        map((card) => {
            return getCards();
        })
      )
    )

    constructor(
        private cardApiService: CardApiService,
        private actions$: Actions) {
    }
}