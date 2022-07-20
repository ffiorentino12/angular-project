import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BeerlistComponent } from './component/beerlist/beerlist.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { BeerFormComponent } from './component/beer-form/beer-form.component';
import { BeerComponent } from './component/beer/beer.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent, BeerlistComponent, BeerFormComponent, BeerComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
