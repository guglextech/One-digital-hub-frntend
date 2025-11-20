import { TestBed } from '@angular/core/testing';

import { LottoStarService } from './lotto-star.service';

describe('LottoStarService', () => {
  let service: LottoStarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LottoStarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
