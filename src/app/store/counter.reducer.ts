import { createReducer, on } from '@ngrx/store';
import { counterReducerActions } from './app.actions';
 
export const initialState = 0;
 
const _counterReducer = createReducer(initialState,
  /** switch sur nos actions potentiels creation d'une case 'pattern matching' via on */
  on(counterReducerActions.increment, (currentState: number) => currentState + 1),
  on(counterReducerActions.decrement, (currentState: number) => currentState - 1),
  on(counterReducerActions.reset, () => initialState)
);
 
export function counterReducer(state, action) {
  return _counterReducer(state, action);
}