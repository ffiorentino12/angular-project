import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { beersData } from '../../data/beer-list';
import { allBeerTypes, Beer, BeerForm } from '../../model/model';
import { BeerService } from '../../services/beer.service';

@Component({
  selector: 'app-beer-form',
  templateUrl: './beer-form.component.html',
  styleUrls: ['./beer-form.component.css']
})
export class BeerFormComponent implements OnInit {

  beerTypes = allBeerTypes;
  beerForm: FormGroup<BeerForm>

  
  constructor() {
    ;
  }

  ngOnInit() {
  }

}