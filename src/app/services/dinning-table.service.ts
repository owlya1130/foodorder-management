import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DinningTableService {

  constructor() { }

  getDinningTables(): Observable<DinningTable[]> {
    return new Observable(subscriber => {
      subscriber.next(ELEMENT_DATA);
      subscriber.complete();
    });
  }

  saveDinningTable(tableData: DinningTable): Observable<DinningTable> {
    return new Observable(subscriber => {
      ELEMENT_DATA.push(tableData);
      subscriber.next(tableData);
      subscriber.complete();
    });
  }

  deleteDinningTable(uid: string): Observable<string> {
    return new Observable(subscriber => {
      ELEMENT_DATA = ELEMENT_DATA.filter(data=>data.uid !== uid);
      subscriber.next(uid);
      subscriber.complete();
    });
  }
}

export interface DinningTable {
  uid: string;
  id: string;
  seats: number;
}

let ELEMENT_DATA: DinningTable[] = [
  { uid: '1', id: '桌1', seats: 4 },
  { uid: '2', id: '桌2', seats: 4 },
  { uid: '3', id: '桌3', seats: 4 },
  { uid: '4', id: '桌4', seats: 4 },
  { uid: '5', id: '桌5', seats: 4 },
  { uid: '6', id: '桌6', seats: 4 },
  { uid: '7', id: '桌7', seats: 4 },
  { uid: '8', id: '桌8', seats: 4 },
  { uid: '9', id: '桌9', seats: 4 },
  { uid: '10', id: '桌10', seats: 4 },
];
