import { createReducer, on } from '@ngrx/store';
import { setCards } from './cards.actions';

export const initialState = [];

export const cardsReducer = createReducer(
  initialState,
  on(setCards, (state, action) => action.cards)
);