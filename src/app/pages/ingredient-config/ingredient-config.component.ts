import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MatSelect } from '@angular/material/select';
import { MatTable } from '@angular/material/table';
import { Ingredient } from 'src/app/interfaces/ingredient';
import { IngredientService } from 'src/app/services/ingredient.service';

@Component({
  selector: 'app-ingredient-config',
  templateUrl: './ingredient-config.component.html',
  styleUrls: ['./ingredient-config.component.scss']
})
export class IngredientConfigComponent implements OnInit {

  displayedColumns: string[] = ['name', 'qty', 'packageBy', 'packageQty', 'uid'];
  ingredients: Ingredient[] = [];
  ingredients4PackageBy: Ingredient[] = [];

  @ViewChildren('nameInput')
  private names: QueryList<ElementRef> | undefined;
  @ViewChildren('qtyInput')
  private qtys: QueryList<ElementRef> | undefined;
  @ViewChildren('packageBySelect')
  private packageBys: QueryList<MatSelect> | undefined;
  @ViewChildren('packageQtyInput')
  private packageQtys: QueryList<ElementRef> | undefined;
  @ViewChildren('btnGrp1')
  private btnGrp1s: QueryList<ElementRef> | undefined;
  @ViewChildren('btnGrp2')
  private btnGrp2s: QueryList<ElementRef> | undefined;
  @ViewChild(MatTable)
  private table: MatTable<any> | undefined;

  constructor(
    private ingredientSvc: IngredientService
  ) {
    this.getIngredients();
  }

  ngOnInit(): void {
  }

  getIngredients() {
    this.ingredientSvc
      .findAll()
      .subscribe(data => {
        const rowData = data as Ingredient[];
        this.ingredients = rowData;
        this.ingredients4PackageBy = rowData.filter(data => data.packageByUID === null);
      });
  }

  addIngredient() {
    this.ingredients.push({
      uid: null,
      name: '',
      qty: 0,
      packageByUID: null,
      packageQty: null
    });
    this.table?.renderRows();
    setTimeout(() => {
      this.reserveDisabled(this.ingredients.length - 1);
    });
  }

  reserveDisabled(idx: number) {
    let name = this.names?.get(idx) as ElementRef;
    let qty = this.qtys?.get(idx) as ElementRef;
    let packageBy = this.packageBys?.get(idx) as MatSelect;
    let packageQty = this.packageQtys?.get(idx) as ElementRef;
    name.nativeElement.disabled = !name.nativeElement.disabled;
    qty.nativeElement.disabled = !qty.nativeElement.disabled;
    packageBy.disabled = !packageBy.disabled;
    packageQty.nativeElement.disabled = !packageQty.nativeElement.disabled;
    let btngrp1 = this.btnGrp1s?.get(idx) as ElementRef;
    let btngrp2 = this.btnGrp2s?.get(idx) as ElementRef;
    btngrp1.nativeElement.hidden = !btngrp1.nativeElement.hidden;
    btngrp2.nativeElement.hidden = !btngrp2.nativeElement.hidden;
  }

  saveIngredient(idx: number) {
    this.ingredientSvc
      .saveOrUpdate(this.ingredients[idx])
      .subscribe(data => {
        this.getIngredients();
        this.reserveDisabled(idx);
        this.table?.renderRows();
      });
  }

  deleteIngredient(idx: number) {
    this.ingredientSvc
      .delete(this.ingredients[idx].uid as string)
      .subscribe(data => {
        this.getIngredients();
        this.table?.renderRows();
      });
  }

}
