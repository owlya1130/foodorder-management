import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Code } from '../interfaces/code';

@Injectable({
  providedIn: 'root'
})
export class ReservationTimeblockService {

  constructor(private http: HttpClient) { }

  findAll() {
    return this.http.get<Code[]>(`${environment.apiHist}/reservation-timeblock/list`);
  }

  saveOrUpdate(timeBlock: Code) {
    if (timeBlock.uid === null) {
      return this.http.post<Code>(`${environment.apiHist}/reservation-timeblock`, timeBlock);
    } else {
      return this.http.put<Code>(`${environment.apiHist}/reservation-timeblock`, timeBlock);
    }
  }
}
