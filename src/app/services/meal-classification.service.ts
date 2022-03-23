import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Code } from '../interfaces/code';

@Injectable({
  providedIn: 'root'
})
export class MealClassificationService {

  constructor(private http: HttpClient) { }

  findAll() {
    return this.http.get<Code[]>(`${environment.apiHist}/meal-classification/list`);
  }

  saveOrUpdate(mealClassification: Code) {
    if (mealClassification.uid === null) {
      return this.http.post<Code>(`${environment.apiHist}/meal-classification`, mealClassification);
    } else {
      return this.http.put<Code>(`${environment.apiHist}/meal-classification`, mealClassification);
    }
  }

  delete(uid: string) {
    return this.http.delete<Code>(`${environment.apiHist}/meal-classification/${uid}`);
  }
}
