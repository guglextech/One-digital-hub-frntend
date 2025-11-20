import { TestBed } from '@angular/core/testing';

import { LuckyPickTwoSureService } from './lucky-pick-two-sure.service';

describe('LuckyPickTwoSureService', () => {
  let service: LuckyPickTwoSureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LuckyPickTwoSureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
