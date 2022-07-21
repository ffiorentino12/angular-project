import { createAction, props } from "@ngrx/store";


export const deleteBeerAction = createAction(
  '[beer] deleteBeer',
 props<{ id : number}>());

 export interface deleteBeerActionProps {

 }