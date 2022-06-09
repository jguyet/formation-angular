import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
import { CardApiService } from "src/app/shared/services/card-api.service";
import { getCards, removeCard, setCards, setError } from "./cards.actions";

@Injectable({
    providedIn: 'root'
})
export class CardsEffects {

    $getCardEffect = createEffect(() => {
        return this.actions.pipe(
            ofType(getCards),
            mergeMap(action => {
                return this.cardApiService.getCards();
            }),
            map(cards => {
                return setCards({ cards: cards });
            }),
            catchError((e) => {
                console.log('catch Error CardEffects', e);
                return of(setError({ error: e.message }));
            })
        );
    });

    $removeCardEffect = createEffect(() => {
        return this.actions.pipe(
            ofType(removeCard),
            mergeMap(action => {
                return this.cardApiService.removeCardById(action.id);
            }),
            map(card => {
                if (card !== undefined) return getCards();
                return setError({ error: 'Card already removed' });
            }),
            catchError((e: HttpErrorResponse) => {
                if (e.status === 406) {
                    return of(getCards());
                }
                console.log('catch Error RemoveCardEffects', e);
                return of(setError({ error: e.message }));
            })
        );
    });

    constructor(
        private actions: Actions,
        private cardApiService: CardApiService
        ) {
    }

}