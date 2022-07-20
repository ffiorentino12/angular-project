import { Injectable } from '@angular/core';
import { beersData } from '../data/beer-list';
import { Beer } from '../model/model';

@Injectable( { providedIn: 'root' })
export class BeerService {
  beers: Beer[] = beersData;

  constructor() { }

  getBeersList() {
    return this.beers;
  }

  deleteBeer(item: Beer) {
    this.beers = this.beers.filter( beer => beer.id !== item.id);
    console.log(this.beers);
  }

  addBeer(beer: Beer) {
    this.beers.unshift(beer)
  }

  generateId() {
    const maxId = Math.max(...this.beers.map(beer => beer.id))
    return maxId +1;
  }
  //Essendo un array , con i 3 punti lo svuota
}