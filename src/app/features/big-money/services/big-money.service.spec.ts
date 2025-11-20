import { TestBed } from '@angular/core/testing';

import { BigMoneyService } from './big-money.service';

describe('BigMoneyService', () => {
  let service: BigMoneyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BigMoneyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
