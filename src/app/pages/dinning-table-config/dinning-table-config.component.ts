import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { DinningTable } from 'src/app/interfaces/dinning-table';
import { DinningTableService } from 'src/app/services/dinning-table.service';

@Component({
  selector: 'app-dinning-table-config',
  templateUrl: './dinning-table-config.component.html',
  styleUrls: ['./dinning-table-config.component.scss']
})
export class DinningTableConfigComponent implements OnInit {

  displayedColumns: string[] = ['name', 'seats', 'uid'];
  tables: DinningTable[] = [];

  @ViewChildren('idsInput')
  private tableIDs: QueryList<ElementRef> | undefined;
  @ViewChildren('seatsInput')
  private tableSeats: QueryList<ElementRef> | undefined;
  @ViewChildren('btnGrp1')
  private btnGrp1s: QueryList<ElementRef> | undefined;
  @ViewChildren('btnGrp2')
  private btnGrp2s: QueryList<ElementRef> | undefined;
  @ViewChild(MatTable)
  private table: MatTable<any> | undefined;

  constructor(
    private dinningTableSvc: DinningTableService
  ) {
    this.getTables();
  }

  ngOnInit(): void {
  }

  getTables() {
    this.dinningTableSvc
      .findAll()
      .subscribe(data => {
        this.tables = data as DinningTable[];
      });
  }

  addTable() {
    this.tables.push({
      name: "",
      seats: 0,
      uid: null
    });
    this.table?.renderRows();
    setTimeout(() => {
      this.reserveDisabled(this.tables.length - 1);
    });
  }

  reserveDisabled(idx: number) {
    let id = this.tableIDs?.get(idx) as ElementRef;
    let seat = this.tableSeats?.get(idx) as ElementRef;
    id.nativeElement.disabled = !id.nativeElement.disabled;
    seat.nativeElement.disabled = !seat.nativeElement.disabled;
    let btngrp1 = this.btnGrp1s?.get(idx) as ElementRef;
    let btngrp2 = this.btnGrp2s?.get(idx) as ElementRef;
    btngrp1.nativeElement.hidden = !btngrp1.nativeElement.hidden;
    btngrp2.nativeElement.hidden = !btngrp2.nativeElement.hidden;
  }

  saveTable(idx: number) {
    this.dinningTableSvc
      .saveOrUpdate(this.tables[idx])
      .subscribe(data => {
        this.getTables();
        this.reserveDisabled(idx);
        this.table?.renderRows();
      });
  }

  deleteTable(idx: number) {
    const target = this.tables[idx];
    const deleteComfirm = confirm(`確定刪除"${target.name}"嗎?`);
    if (deleteComfirm) {
      this.dinningTableSvc
        .delete(target.uid as string)
        .subscribe(data => {
          this.getTables();
          this.table?.renderRows();
        });
    }
  }

}
