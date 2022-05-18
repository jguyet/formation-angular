import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './counter.actions';

export const initialState = 0;

export const counterReducer = createReducer(
  initialState,

  on(increment, (currentState, action) => currentState + action.nbr),

  on(decrement, (state) => state - 1),
  
  on(reset, (state) => 0)
);