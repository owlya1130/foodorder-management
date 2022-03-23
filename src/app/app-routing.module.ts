import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DinningTableConfigComponent } from './pages/dinning-table-config/dinning-table-config.component';
import { IngredientConfigComponent } from './pages/ingredient-config/ingredient-config.component';
import { MealClassificationConfigComponent } from './pages/meal-classification-config/meal-classification-config.component';
import { ReservationTimeblockComponent } from './pages/reservation-timeblock/reservation-timeblock.component';

const routes: Routes = [{
  path: 'ingredient-config',
  component: IngredientConfigComponent
}, {
  path: 'meal-classification-config',
  component: MealClassificationConfigComponent
}, {
  path: 'dinning-table-config',
  component: DinningTableConfigComponent
}, {
  path: 'reservation-timeblock-config',
  component: ReservationTimeblockComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
