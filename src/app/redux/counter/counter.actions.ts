import { createAction, props } from '@ngrx/store';

interface IncrementActionProps {
    nbr: number
};

export const increment = createAction('[Counter Component] Increment', props<IncrementActionProps>());
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');