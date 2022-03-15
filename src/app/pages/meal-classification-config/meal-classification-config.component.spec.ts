import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealClassificationConfigComponent } from './meal-classification-config.component';

describe('MealClassificationConfigComponent', () => {
  let component: MealClassificationConfigComponent;
  let fixture: ComponentFixture<MealClassificationConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MealClassificationConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MealClassificationConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
