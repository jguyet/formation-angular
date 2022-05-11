import { createAction, props } from '@ngrx/store';
import { Card } from '../shared/models/card';

export const getCards = createAction('[Card Component] Get Cards');
export const setCards = createAction('[Card Component] Set Cards', props<{ cards: Card[] }>());
export const deleteOneCard = createAction('[Card Component] Delete One Card', props<{ cardId: string }>());

export const setCardsError = createAction('[Card Component] Set Cards Error');
export const deleteOneCardError = createAction('[Card Component] Delete One Card Error');