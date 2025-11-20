import { TestBed } from '@angular/core/testing';

import { LuckyBuckService } from './lucky-buck.service';

describe('LuckyBuckService', () => {
  let service: LuckyBuckService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LuckyBuckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
