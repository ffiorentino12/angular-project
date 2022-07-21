import { createSelector } from "@ngrx/store";
import { AppState, BeerState } from "../model/state";

const beerStateFunction = (state: AppState)=> state.beerState;
export const beerSelectors = createSelector(beerStateFunction, (beerState: BeerState) => beerState.list);