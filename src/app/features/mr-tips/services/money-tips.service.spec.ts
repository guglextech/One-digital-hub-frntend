import { TestBed } from '@angular/core/testing';

import { MoneyTipsService } from './money-tips.service';

describe('MoneyTipsService', () => {
  let service: MoneyTipsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoneyTipsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
