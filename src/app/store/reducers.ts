import { createReducer, on } from '@ngrx/store';
import { Observable } from 'rxjs';
import { beersData } from '../data/beer-list';
import { BeerState } from '../model/state';
import { deleteBeerAction } from './actions';
import * as Actions from '../store/actions';
import { Beer } from '../model/model';

const initialBeerState: BeerState = { list: beersData };

// export const beerReducers = createReducer(initialBeerState);

export const deleteReduce = createReducer(
  initialBeerState,

  on(Actions.deleteBeerAction, (stateBeers, arg: { id: number }) => ({
    ...stateBeers,

    list: stateBeers.list.filter((beer) => beer.id != arg.id),
  }))
);


export const addReduce = createReducer(
  initialBeerState,
  on(Actions.addBeerAction, (stateBeers, arg: { beer: Beer }) => ({
    ...stateBeers,
    list: pushBeer(stateBeers, arg.beer),
  }))
);

function pushBeer(stateBeers: BeerState, beer: Beer): Beer[] {
  stateBeers.list.push(beer);
  return stateBeers.list;
}


/*
export const addReduce = createReducer(
  initialBeerState,
  on(Actions.addBeerAction, (stateBeers, arg: { beer: Beer }) => ({
    return {
      ...state,
    list: [...state.list, arg.beer],
    };
  })
  );
  */
  

 
