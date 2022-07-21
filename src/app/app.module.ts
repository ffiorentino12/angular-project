import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BeerlistComponent } from './component/beerlist/beerlist.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { BeerFormComponent } from './component/beer-form/beer-form.component';
import { BeerComponent } from './component/beer/beer.component';
import { StoreModule } from '@ngrx/store';
import { AppState } from './model/state';
import { deleteReduce } from './store/reducers';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, ReactiveFormsModule, StoreModule.forRoot<AppState>({ beerState:deleteReduce })],
  declarations: [ AppComponent, HelloComponent, BeerlistComponent, BeerFormComponent, BeerComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
