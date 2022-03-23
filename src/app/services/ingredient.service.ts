import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Ingredient } from '../interfaces/ingredient';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  constructor(private http: HttpClient) { }

  findAll() {
    return this.http.get<Ingredient[]>(`${environment.apiHist}/ingredient/list`);
  }

  saveOrUpdate(ingredient: Ingredient) {
    if (ingredient.uid === null) {
      return this.http.post<Ingredient>(`${environment.apiHist}/ingredient`, ingredient);
    } else {
      return this.http.put<Ingredient>(`${environment.apiHist}/ingredient`, ingredient);
    }
  }

  delete(uid: string) {
    return this.http.delete<Ingredient>(`${environment.apiHist}/ingredient/${uid}`);
  }
}
