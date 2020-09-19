import { createReducer, createAction, on, props } from '@ngrx/store';

export const winPartyAction = createAction("[CumulateReducer] winParty", props<{ points: number }>());
export const loosePartyAction = createAction("[CumulateReducer] looseParty");
export const equalsPartyAction = createAction("[CumulateReducer] equalsParty");

export const defaultPartyPoints = undefined;

// export const cumulateReducer = (state, action) => {
//     return createReducer(defaultPartyPoints,
//         on(winPartyAction, (state, action) => {
//             console.log(state, action);
//             return (action.points);
//         }),
//         on(loosePartyAction, (state) => {
//             return (0);
//         }),
//         on(equalsPartyAction, (state) => {
//             console.log(state, 'HEY');
//             return (-1);
//         })
//     )(state, action);
// };