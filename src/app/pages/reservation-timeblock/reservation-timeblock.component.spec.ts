import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationTimeblockComponent } from './reservation-timeblock.component';

describe('ReservationTimeblockComponent', () => {
  let component: ReservationTimeblockComponent;
  let fixture: ComponentFixture<ReservationTimeblockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationTimeblockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationTimeblockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
