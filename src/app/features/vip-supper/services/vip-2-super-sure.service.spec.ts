import { TestBed } from '@angular/core/testing';

import { Vip2SuperSureService } from './vip-2-super-sure.service';

describe('Vip2SuperSureService', () => {
  let service: Vip2SuperSureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Vip2SuperSureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
