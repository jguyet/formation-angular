import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './counter.actions';

export const initialState = 0;

export const counterReducer = createReducer(
  initialState,

  // case increment:
  on(increment, (state, action) => state + action.nbr),
  // case decrement:
  on(decrement, (state) => state - 1),
  // case reset:
  on(reset, (state) => 0)
);