import { on, createReducer, createAction } from '@ngrx/store';

export const incrementAction = createAction('[Reducer lunette] increment');
export const decrementAction = createAction('[Reducer lunette] decrement');
export const resetAction     = createAction('[Reducer lunette] reset');

export const lunetteReducer = (state, action) => {
    return createReducer(0,
        on(incrementAction, (state, action) => {
            console.log('increment ', state, action);
            return state + 1;
        }),
        on(decrementAction, (state, action) => {
            console.log('decrement ', state, action);
            return state - 1;
        }),
        on(resetAction, (state, action) => {
            console.log('decrement ', state, action);
            return 0;
        }),
    )(state, action);
};