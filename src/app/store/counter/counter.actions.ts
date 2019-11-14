import { createAction, props } from '@ngrx/store';

export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const mult      = createAction('[Counter Component] Mult', props<{ n: number }>());
export const add       = createAction('[Counter Component] Add', props<{ n: number }>());
export const reset     = createAction('[Counter Component] Reset');
