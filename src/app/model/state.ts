import { Beer } from "./model";

export interface AppState {
  beerState : BeerState;
}

export interface BeerState {
  list: Beer[];

}