import { TestBed } from '@angular/core/testing';

import { LottoBibleService } from './lotto-bible.service';

describe('LottoBibleService', () => {
  let service: LottoBibleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LottoBibleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
