import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { DinningTable } from '../interfaces/dinning-table';

@Injectable({
  providedIn: 'root'
})
export class DinningTableService {

  constructor(private http: HttpClient) { }

  findAll() {
    return this.http.get<DinningTable[]>(`${environment.apiHist}/dinningtable/list`);
  }

  saveOrUpdate(dinningTable: DinningTable) {
    if (dinningTable.uid === null) {
      return this.http.post<DinningTable>(`${environment.apiHist}/dinningtable`, dinningTable);
    } else {
      return this.http.put<DinningTable>(`${environment.apiHist}/dinningtable`, dinningTable);
    }
  }

  delete(uid: string) {
    return this.http.delete<DinningTable>(`${environment.apiHist}/dinningtable/${uid}`);
  }
}
