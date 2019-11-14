import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset, mult, div } from './counter.actions';
 
export const initialState = 0;
 
const _counterReducer = createReducer(initialState,
  on(increment, state => state + 1),
  on(decrement, state => state - 1),
  on(mult, (state, action) => state * action.value),
  on(div, (state, action) => state / action.value),
  on(reset, state => 0),
);
 
export function counterReducer(state, action) {
  return _counterReducer(state, action);
}