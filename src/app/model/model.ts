export type BeerStyle =
  | 'ALE'
  | 'GOSE'
  | 'IPA'
  | 'LAGER'
  | 'PALE_ALE'
  | 'PILSNER'
  | 'PORTER'
  | 'SAISON'
  | 'STOUT'
  | 'HEAT'
  | 'WHEAT';
  
export interface Beer {
  id: number;
  beerName: string;
  beerStyle: BeerStyle;
  upc: string;
  price: number;
  createdDate: Date;
  lastModifiedDate: Date;
}