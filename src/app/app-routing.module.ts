import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DinningTableConfigComponent } from './pages/dinning-table-config/dinning-table-config.component';
import { IngredientConfigComponent } from './pages/ingredient-config/ingredient-config.component';
import { MealClassificationConfigComponent } from './pages/meal-classification-config/meal-classification-config.component';

const routes: Routes = [{
  path: 'ingredient-config',
  component: IngredientConfigComponent
}, {
  path: 'meal-classification-config',
  component: MealClassificationConfigComponent
}, {
  path: 'dinning-table-config',
  component: DinningTableConfigComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
