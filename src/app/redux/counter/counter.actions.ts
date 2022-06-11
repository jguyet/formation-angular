import { Action, createAction, props, Store } from '@ngrx/store';
import { TypedAction } from '@ngrx/store/src/models';


export interface IncrementProps {
    nbr: number;
}
export const increment = createAction('[Counter Component] Increment', props<IncrementProps>());
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');
