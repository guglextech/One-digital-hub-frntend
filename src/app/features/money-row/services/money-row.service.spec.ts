import { TestBed } from '@angular/core/testing';

import { MoneyRowService } from './money-row.service';

describe('MoneyRowService', () => {
  let service: MoneyRowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoneyRowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
