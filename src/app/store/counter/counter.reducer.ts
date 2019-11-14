import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset, add, mult } from './counter.actions';

const initialState = 0;

const _counterReducer = createReducer(initialState,
  on(increment, (currentState, action) => {
      console.log('increment', currentState, action);
      return currentState + 1;
    }),
  on(decrement, (currentState, action) => {
      console.log('decrement', currentState, action);
    return currentState - 1;
  }),
  on(add, (currentState, action) => {
    console.log('add', currentState, action);
    return currentState + action.n;
  }),
  on(mult, (currentState, action) => {
    console.log('mult', currentState, action);
    return currentState * action.n;
  }),
  on(reset, () => initialState),
);

export function counterReducer(state, action) {
  return _counterReducer(state, action);
}