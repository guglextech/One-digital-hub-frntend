import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LottoKeysPlusComponent } from './lotto-keys-plus.component';

describe('LottoKeysPlusComponent', () => {
  let component: LottoKeysPlusComponent;
  let fixture: ComponentFixture<LottoKeysPlusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LottoKeysPlusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LottoKeysPlusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
