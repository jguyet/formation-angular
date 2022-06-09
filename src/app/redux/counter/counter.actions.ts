import { createAction, props } from '@ngrx/store';

export interface IncrementProps {
    nbr: number;
}

export const increment = createAction('[Counter Component] Increment', props<IncrementProps>());
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');