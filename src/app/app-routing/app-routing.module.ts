import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { BeerFormComponent } from '../component/beer-form/beer-form.component';
import { BeerlistComponent } from '../component/beerlist/beerlist.component';

const routes: Route[] = [
  {
  path: '' , 
  redirectTo:'list', 
  pathMatch: 'full' ,
},

  {
    path: 'list',
    component: BeerlistComponent ,
  },
  {
    path:'add',
    component: BeerFormComponent ,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }