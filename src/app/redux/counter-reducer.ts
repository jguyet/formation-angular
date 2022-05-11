import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './counter-action';

export const initialState = 0;

export const counterReducer = createReducer(
  initialState,
  on(increment, (state, action) => state + action.nbr),
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0)
);