import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReservationTimeblockService } from 'src/app/services/reservation-timeblock.service';

@Component({
  selector: 'app-reservation-timeblock',
  templateUrl: './reservation-timeblock.component.html',
  styleUrls: ['./reservation-timeblock.component.scss']
})
export class ReservationTimeblockComponent implements OnInit {

  form = new FormGroup({
    uid: new FormControl({ value: null, disabled: true }),
    name: new FormControl({ value: 0, disabled: true }, [Validators.required, Validators.min(1)]),
    type: new FormControl({ value: null, disabled: true })
  });

  constructor(
    private rsvTimeblkSvc: ReservationTimeblockService
  ) {
    this.getReservationTimeblock();
  }

  ngOnInit(): void {
  }

  getReservationTimeblock() {
    const subscriber = this.rsvTimeblkSvc
      .findAll()
      .subscribe(data => {
        if (data.length > 0) {
          this.form.setValue(data[0]);
        }
        subscriber.unsubscribe();
      });
  }

  saveReservationTimeblock() {
    const subscriber = this.rsvTimeblkSvc
      .saveOrUpdate(this.form.getRawValue())
      .subscribe(data => {
        this.form.disable();
        this.getReservationTimeblock();
        subscriber.unsubscribe();
      });
  }

  onEdit() {
    this.form.enable();
  }

}
