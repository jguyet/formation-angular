import { createReducer, on } from '@ngrx/store';
import { Card } from 'src/app/shared/models/card';
import { setCards, setCardsError } from './cards.actions';

export interface CardsOrErrorState {
    cards?: Card[];
    error?: string;
}

export const initialState = {} as CardsOrErrorState;

export const cardsReducer = createReducer(
  initialState,
  on(setCards, (_state, action) => {
    return { cards: action.cards } as CardsOrErrorState;
  }),
  on(setCardsError, (_state, action) => {
    return { error: action.error } as CardsOrErrorState;
  })
);