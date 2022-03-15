import { TestBed } from '@angular/core/testing';

import { DinningTableService } from './dinning-table.service';

describe('DinningTableService', () => {
  let service: DinningTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DinningTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
