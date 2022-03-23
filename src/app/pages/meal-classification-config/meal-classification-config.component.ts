import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Code } from 'src/app/interfaces/code';
import { MealClassificationService } from 'src/app/services/meal-classification.service';

@Component({
  selector: 'app-meal-classification-config',
  templateUrl: './meal-classification-config.component.html',
  styleUrls: ['./meal-classification-config.component.scss']
})
export class MealClassificationConfigComponent implements OnInit {

  displayedColumns: string[] = ['name', 'uid'];
  classifications: Code[] = [];

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
    const subscriber = this.mealClassificationSvc
      .findAll()
      .subscribe(data => {
        this.classifications = data;
        subscriber.unsubscribe();
      });
  }

  addClassification() {
    this.classifications.push({
      name: "",
      uid: null,
      type: null
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
    const subscriber = this.mealClassificationSvc
      .saveOrUpdate(this.classifications[idx])
      .subscribe(data => {
        this.getClassifications();
        this.reserveDisabled(idx);
        this.table?.renderRows();
        subscriber.unsubscribe();
      });
  }

  deleteClassification(idx: number) {
    const target = this.classifications[idx];
    const deleteComfirm = confirm(`確定刪除"${target.name}"嗎?`);
    if (deleteComfirm) {
      const subscriber = this.mealClassificationSvc
        .delete(target.uid as string)
        .subscribe(data => {
          this.getClassifications();
          this.table?.renderRows();
          subscriber.unsubscribe();
        });
    }
  }

}
