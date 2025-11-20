import { TestBed } from '@angular/core/testing';

import { LottoGuideService } from './lotto-guide.service';

describe('LottoGuideService', () => {
  let service: LottoGuideService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LottoGuideService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
