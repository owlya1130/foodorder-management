import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MealClassificationService } from 'src/app/services/meal-classification.service';

@Component({
  selector: 'app-meal-classification-config',
  templateUrl: './meal-classification-config.component.html',
  styleUrls: ['./meal-classification-config.component.scss']
})
export class MealClassificationConfigComponent implements OnInit {

  displayedColumns: string[] = ['name', 'uid'];
  classifications: any[] = [];

  @ViewChildren('nameInput')
  private names: QueryList<ElementRef> | undefined;
  @ViewChildren('btnGrp1')
  private btnGrp1s: QueryList<ElementRef> | undefined;
  @ViewChildren('btnGrp2')
  private btnGrp2s: QueryList<ElementRef> | undefined;
  @ViewChild(MatTable)
  private table: MatTable<any> | undefined;

  constructor(
    private mealClassificationSvc: MealClassificationService
  ) {
    this.getClassifications();
  }

  ngOnInit(): void {
  }

  getClassifications() {
    this.mealClassificationSvc
      .getMealClassifications()
      .subscribe(data => {
        this.classifications = data;
      });
  }

  addClassification() {
    this.classifications.push({
      name: "",
      uid: ""
    });
    this.table?.renderRows();
    setTimeout(() => {
      this.reserveDisabled(this.classifications.length - 1);
    });
  }

  reserveDisabled(idx: number) {
    let name = this.names?.get(idx) as ElementRef;
    name.nativeElement.disabled = !name.nativeElement.disabled;
    let btngrp1 = this.btnGrp1s?.get(idx) as ElementRef;
    let btngrp2 = this.btnGrp2s?.get(idx) as ElementRef;
    btngrp1.nativeElement.hidden = !btngrp1.nativeElement.hidden;
    btngrp2.nativeElement.hidden = !btngrp2.nativeElement.hidden;
  }

  saveClassification(idx: number) {
    this.mealClassificationSvc
      .saveClassification(this.classifications[idx])
      .subscribe(data => {
        this.getClassifications();
        this.reserveDisabled(idx);
        this.table?.renderRows();
      });
  }

  deleteClassification(idx: number) {
    this.mealClassificationSvc
      .deleteClassification(this.classifications[idx].uid)
      .subscribe(data => {
        this.getClassifications();
        this.table?.renderRows();
      });
  }

}
