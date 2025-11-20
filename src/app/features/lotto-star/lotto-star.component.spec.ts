import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LottoStarComponent } from './lotto-star.component';

describe('LottoStarComponent', () => {
  let component: LottoStarComponent;
  let fixture: ComponentFixture<LottoStarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LottoStarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LottoStarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
