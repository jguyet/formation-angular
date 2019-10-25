import { createReducer, on } from '@ngrx/store';
import { changeAction, resetAction } from './app.actions';

export interface ValueState {
    value: string
}

/**
 * Definition d'un Reducer :
 * 1. un nom
 * 2. un etat initial
 * 3. creation d'un reducer
 */
export class ValueReducer {
    
    static NAME = 'value';
    static initialState: ValueState = { value: 'default state' } as ValueState;

    static reducer = (state: ValueState | undefined, action) => {
        console.log('Etat, Action from reducer :', state, action);
        return createReducer(ValueReducer.initialState,

                /** definitions des actions possible : */
                on(changeAction, (currentState, x) => x as ValueState),
                on(resetAction, state => ValueReducer.initialState),
                /** --------------------------------- */
            )(state, action);
    }
}