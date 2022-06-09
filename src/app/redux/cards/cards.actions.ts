import { createAction, props } from '@ngrx/store';
import { Card } from 'src/app/shared/models/card';

export interface SetCardsProps {
    cards: Card[]
};

export interface SetErrorProps {
    error: string
};

export interface RemoveCardProps {
    id: string
};

// Actions Reducer
export const setCards = createAction('[Cards Reducer] Set Cards', props<SetCardsProps>());
export const setError = createAction('[Cards Reducer] Set Error', props<SetErrorProps>());

// Actions Effects
export const getCards = createAction('[Cards Effects] Get Cards');
export const removeCard = createAction('[Cards Effects] Remove Card', props<RemoveCardProps>());
