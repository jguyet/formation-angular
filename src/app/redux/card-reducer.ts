import { createReducer, on } from '@ngrx/store';
import { Card } from '../shared/models/card';
import { getCards, setCards, deleteOneCard, setCardsError, deleteOneCardError } from './card-actions';

export const initialState = { cards: [] };

export const cardReducer = createReducer<{ cards?: Card[], error?: string }>(
  initialState,
  on(setCards, (_state, action) => {
    return { cards: action.cards };
  }),
  on(setCardsError, (_state, _action) => {
    return { error: 'Error Set Cards' };
  }),
  on(deleteOneCardError, () => {
    return { error: 'Impossible de supprimer.' };
  })
);