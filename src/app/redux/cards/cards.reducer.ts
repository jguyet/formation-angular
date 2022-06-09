import { on, createReducer } from '@ngrx/store';
import { ActionSequence } from 'protractor';
import { Card } from 'src/app/shared/models/card';
import { setCards, setError } from './cards.actions';

export interface CardsOrError {
    cards?: Card[];
    error?: string;
};

const initialValue = { cards: [] } as CardsOrError;

export const cardsReducer = createReducer(initialValue,
    on(setCards, (_state, action) => {
        return { cards: action.cards };
    }),
    on(setError, (_state, action) => {
        return { error: action.error };
    }),
);