import { createAction, props } from "@ngrx/store";
import { Card } from "src/app/shared/models/card";

// Getter
export const getCards = createAction('[Cards Component] retrieve cards');

// Setter
export interface SetCardsProps {
    cards: Card[];
};
export const setCards = createAction('[Cards Component] set cards', props<SetCardsProps>());

// Errors:
export interface SetCardsErrorProps {
    error: string;
};
export const setCardsError = createAction('[Cards Component] set cards error', props<SetCardsErrorProps>());