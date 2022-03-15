import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MealClassificationService {

  constructor() { }

  getMealClassifications(): Observable<Classification[]> {
    return new Observable(subscriber => {
      subscriber.next(ELEMENT_DATA);
      subscriber.complete();
    });
  }

  saveClassification(tableData: Classification): Observable<Classification> {
    return new Observable(subscriber => {
      ELEMENT_DATA.push(tableData);
      subscriber.next(tableData);
      subscriber.complete();
    });
  }

  deleteClassification(uid: string): Observable<string> {
    return new Observable(subscriber => {
      ELEMENT_DATA = ELEMENT_DATA.filter(data=>data.uid !== uid);
      subscriber.next(uid);
      subscriber.complete();
    });
  }
}

export interface Classification {
  uid: string;
  name: string;
}

let ELEMENT_DATA: Classification[] = [
  { uid: '1', name: '分類1' },
  { uid: '2', name: '分類2' },
  { uid: '3', name: '分類3' },
  { uid: '4', name: '分類4' },
  { uid: '5', name: '分類5' },
  { uid: '6', name: '分類6' },
  { uid: '7', name: '分類7' },
  { uid: '8', name: '分類8' },
  { uid: '9', name: '分類9' },
  { uid: '10', name: '分類10' },
];
