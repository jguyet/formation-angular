import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, mergeMap, tap } from "rxjs/operators";
import { Card } from "src/app/shared/models/card";
import { CardApiService } from "src/app/shared/services/card-api.service";
import { getCards, setCards, setCardsError, SetCardsErrorProps, SetCardsProps } from "./cards.actions";

@Injectable({
    providedIn: 'root'
})
export class CardsEffects {

    $getCards = createEffect(() => {
        return this.actions.pipe(
            ofType(getCards),
            tap(() => {
                console.log('getCards 1');
            }),
            mergeMap((_action) => {
                return this.cardsApiService.getCards();
            }),
            tap((cards) => {
                console.log('getCards 2', cards);
            }),
            map((cards: Card[]) => {
                return setCards({ cards: cards } as SetCardsProps);
            }),
            catchError((e: HttpErrorResponse) => {
                return of(setCardsError({ error: `Error CardsEffects: ${e.message}` } as SetCardsErrorProps));
            })
        );
    });

    constructor(
        private actions: Actions,
        private cardsApiService: CardApiService) {
    }
}