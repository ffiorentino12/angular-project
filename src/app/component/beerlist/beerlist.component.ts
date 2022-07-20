import { Component, OnInit } from '@angular/core';
import { beersData } from '../../data/beer-list';
import { Beer } from '../../model/model';
import { BeerService } from '../../services/beer.service';

@Component({
  selector: 'app-beerlist',
  templateUrl: './beerlist.component.html',
  styleUrls: ['./beerlist.component.css']
})
export class BeerlistComponent implements OnInit {

  subtTitle='';


  constructor(public beerService: BeerService) { }

  ngOnInit() {
  }
  mihannoCliccato( beer: Beer) {
    this.subtTitle = '-' + beer.beerName;
    console.log("Cliccato: " + {beer})
  }

}