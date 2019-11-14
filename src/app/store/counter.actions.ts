import { createAction, props } from '@ngrx/store';

export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const mult      = createAction('[Counter Component] Mult', props<{ value: number }>());
export const div       = createAction('[Counter Component] Div', props<{ value: number }>());
export const reset     = createAction('[Counter Component] Reset');