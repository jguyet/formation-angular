import { createReducer, on } from '@ngrx/store';
import { getCards, setCards, deleteOneCard, setCardsError } from './card-actions';

export const initialState = [];

export const cardReducer = createReducer(
  initialState,
  on(setCards, (state, action) => action.cards),
  on(setCardsError, (state, action) => [])
);