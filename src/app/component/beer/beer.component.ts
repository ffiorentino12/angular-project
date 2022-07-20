import { Component, Input, OnInit } from '@angular/core';
import { Beer } from '../../model/model';
import { BeerService } from '../../services/beer.service';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css']
})
export class BeerComponent implements OnInit {
  
  @Input() beer: Beer;


  constructor(private beerService: BeerService) { }

  ngOnInit() {
  }

  onDelete(beer: Beer) {
    this.beerService.deleteBeer(beer);

  }

}