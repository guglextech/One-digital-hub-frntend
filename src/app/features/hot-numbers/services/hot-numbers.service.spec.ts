import { TestBed } from '@angular/core/testing';

import { HotNumbersService } from './hot-numbers.service';

describe('HotNumbersService', () => {
  let service: HotNumbersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HotNumbersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
