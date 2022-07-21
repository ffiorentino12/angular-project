import { createReducer, on } from '@ngrx/store';
import { Observable } from 'rxjs';
import { beersData } from '../data/beer-list';
import { BeerState } from '../model/state';
import { deleteBeerAction } from './actions';
import * as Actions from '../store/actions';

const initialBeerState: BeerState = { list: beersData };

// export const beerReducers = createReducer(initialBeerState);

export const deleteReduce = createReducer(
  initialBeerState,

  on(Actions.deleteBeerAction, (stateBeers, arg: { id: number }) => ({
    ...stateBeers,

    list: stateBeers.list.filter((beer) => beer.id != arg.id),
  }))
);
