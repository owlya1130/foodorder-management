import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialsModule } from './modules/materials.module';
import { MealClassificationConfigComponent } from './pages/meal-classification-config/meal-classification-config.component';
import { DinningTableConfigComponent } from './pages/dinning-table-config/dinning-table-config.component';
import { IngredientConfigComponent } from './pages/ingredient-config/ingredient-config.component';

@NgModule({
  declarations: [
    AppComponent,
    IngredientConfigComponent,
    MealClassificationConfigComponent,
    DinningTableConfigComponent,
    IngredientConfigComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    FlexLayoutModule,
    MaterialsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
