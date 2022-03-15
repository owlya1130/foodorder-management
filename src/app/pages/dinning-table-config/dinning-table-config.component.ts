import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { DinningTableService } from 'src/app/services/dinning-table.service';

@Component({
  selector: 'app-dinning-table-config',
  templateUrl: './dinning-table-config.component.html',
  styleUrls: ['./dinning-table-config.component.scss']
})
export class DinningTableConfigComponent implements OnInit {

  displayedColumns: string[] = ['id', 'seats', 'uid'];
  tables: any[] = [];

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
      .getDinningTables()
      .subscribe(data => {
        this.tables = data;
      });
  }

  addTable() {
    this.tables.push({
      id: "",
      seats: 0,
      uid: ""
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
      .saveDinningTable(this.tables[idx])
      .subscribe(data => {
        this.getTables();
        this.reserveDisabled(idx);
        this.table?.renderRows();
      });
  }

  deleteTable(idx: number) {
    this.dinningTableSvc
      .deleteDinningTable(this.tables[idx].uid)
      .subscribe(data => {
        this.getTables();
        this.table?.renderRows();
      });
  }

}
