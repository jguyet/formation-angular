import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';
import { Card } from 'src/app/shared/models/card';
import { setCards, setErrors } from './cards.actions';

export interface CardStoreState {
    cards?: Card[]
    errors?: string[]
}

export const initialState = { cards: [] };

export const cardsReducer = createReducer<CardStoreState>(
  initialState,

  on(setCards, (state, action) => {
      return { cards: action.cards } as CardStoreState;
  }),

  on(setErrors, (state, action) => {
    return { errors: action.errors } as CardStoreState;
  })
);