import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  constructor() { }
  getIngredients(): Observable<Ingredient[]> {
    return new Observable(subscriber => {
      subscriber.next(ELEMENT_DATA);
      subscriber.complete();
    });
  }

  saveIngredient(tableData: Ingredient): Observable<Ingredient> {
    return new Observable(subscriber => {
      ELEMENT_DATA.push(tableData);
      subscriber.next(tableData);
      subscriber.complete();
    });
  }

  deleteIngredient(uid: string): Observable<string> {
    return new Observable(subscriber => {
      ELEMENT_DATA = ELEMENT_DATA.filter(data=>data.uid !== uid);
      subscriber.next(uid);
      subscriber.complete();
    });
  }
}

export interface Ingredient {
  uid: string;
  name: string;
  qty: number;
  packageBy: string | null;
  packageQty: number | null;
}

let ELEMENT_DATA: Ingredient[] = [
  {
    uid: '1',
    name: '薯條(大)',
    qty: 3,
    packageBy: null,
    packageQty: null
  },
  {
    uid: '2',
    name: '薯條(小)',
    qty: 7,
    packageBy: '1',
    packageQty: 10
  },
  {
    uid: '3',
    name: '雞塊(大)',
    qty: 1,
    packageBy: null,
    packageQty: null
  },
];

