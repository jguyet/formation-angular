import { createAction, props } from '@ngrx/store';
import { ValueState } from './value.reducer';

export const changeAction = createAction('[Value Component] Change', props<ValueState>());
export const resetAction = createAction('[Value Component] Reset');