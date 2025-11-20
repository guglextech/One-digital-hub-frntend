import { TestBed } from '@angular/core/testing';

import { LottoChoiceService } from './lotto-choice.service';

describe('LottoChoiceService', () => {
  let service: LottoChoiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LottoChoiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
