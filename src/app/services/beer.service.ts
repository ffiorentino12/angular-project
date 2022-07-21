import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { beersData } from '../data/beer-list';
import { Beer } from '../model/model';
import { beerSelectors } from '../store/selectors';

@Injectable( { providedIn: 'root' })
export class BeerService {
  beers: Beer[] = beersData;

  constructor(private store: Store) { }

  getBeersList(): Observable<Beer[]> {
    return this.store.select(beerSelectors);
  }

  deleteBeer(item: Beer) {
    this.beers = this.beers.filter( beer => beer.id !== item.id);
    console.log(this.beers);
  }

  addBeer(beer: Beer) {
    this.beers.unshift(beer);
  }

  generateId() {
    const maxId = Math.max(...this.beers.map(beer => beer.id))
    return maxId +1;
  }
  //Essendo un array , con i 3 punti lo svuota
}