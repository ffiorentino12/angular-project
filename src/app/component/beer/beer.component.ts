import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Beer } from '../../model/model';
import { BeerService } from '../../services/beer.service';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css']
})
export class BeerComponent implements OnInit {
  
  @Input() beer: Beer;
  @Output() cliccato = new EventEmitter<string>();


  beers: Beer[];
  constructor(private beerService: BeerService) { 
    this.beers = this.beerService.getBeersList()
  }

  ngOnInit() {
  }

  OnDelete(beer: Beer) {
    this.beerService.deleteBeer(beer);

  }

}