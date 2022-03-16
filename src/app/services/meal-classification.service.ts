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
    return this.http.get(`${environment.apiHist}/meal-classification/list`);
  }

  saveOrUpdate(mealClassification: Code) {
    if (mealClassification.uid === null) {
      return this.http.post(`${environment.apiHist}/meal-classification`, mealClassification);
    } else {
      return this.http.put(`${environment.apiHist}/meal-classification`, mealClassification);
    }
  }

  delete(uid: string) {
    return this.http.delete(`${environment.apiHist}/meal-classification/${uid}`);
  }
}
