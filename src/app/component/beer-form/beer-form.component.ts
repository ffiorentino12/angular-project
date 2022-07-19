import { Component, OnInit } from '@angular/core';
import { beersData } from '../../data/beer-list';
import { Beer } from '../../model/model';
import { BeerService } from '../../services/beer.service';

@Component({
  selector: 'app-beer-form',
  templateUrl: './beer-form.component.html',
  styleUrls: ['./beer-form.component.css']
})
export class BeerFormComponent implements OnInit {

  beers: Beer[];
  constructor(private beerService: BeerService) {
    this.beers = this.beerService.getBeersList();
  }

  ngOnInit() {
  }

}