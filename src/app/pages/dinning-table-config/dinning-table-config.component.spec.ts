import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DinningTableConfigComponent } from './dinning-table-config.component';

describe('DinningTableConfigComponent', () => {
  let component: DinningTableConfigComponent;
  let fixture: ComponentFixture<DinningTableConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DinningTableConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DinningTableConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
