import { createAction, props } from '@ngrx/store';
import { Card } from 'src/app/shared/models/card';

// coté composant
export const getCards = createAction('[Cards Component] Get Cards');
export const removeCard = createAction('[Cards Component] Remove Card', props<{ id: string }>());

// coté effect
export const setCards = createAction('[Cards Component] Set Cards', props<{ cards: Card[] }>());
export const setErrors = createAction('[Cards Component] Set Error', props<{ errors: string[] }>());
