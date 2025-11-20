import { TestBed } from '@angular/core/testing';

import { SureBakerService } from './sure-baker.service';

describe('SureBakerService', () => {
  let service: SureBakerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SureBakerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
