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
    this.mealClassificationSvc
      .findAll()
      .subscribe(data => {
        this.classifications = data as Code[];
      });
  }

  addClassification() {
    this.classifications.push({
      name: "",
      uid: null,
      type: {
        uid: 1,
        name: "(餐點分類)"
      }
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
      .saveOrUpdate(this.classifications[idx])
      .subscribe(data => {
        this.getClassifications();
        this.reserveDisabled(idx);
        this.table?.renderRows();
      });
  }

  deleteClassification(idx: number) {
    const target = this.classifications[idx];
    const deleteComfirm = confirm(`確定刪除"${target.name}"嗎?`);
    if (deleteComfirm) {
      this.mealClassificationSvc
        .delete(target.uid as string)
        .subscribe(data => {
          this.getClassifications();
          this.table?.renderRows();
        });
    }
  }

}
