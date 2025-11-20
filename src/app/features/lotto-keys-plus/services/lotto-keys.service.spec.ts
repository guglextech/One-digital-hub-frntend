import { TestBed } from '@angular/core/testing';

import { LottoKeysService } from './lotto-keys.service';

describe('LottoKeysService', () => {
  let service: LottoKeysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LottoKeysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
