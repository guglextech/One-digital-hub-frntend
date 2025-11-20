import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LottoChoiceComponent } from './lotto-choice.component';

describe('LottoChoiceComponent', () => {
  let component: LottoChoiceComponent;
  let fixture: ComponentFixture<LottoChoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LottoChoiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LottoChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
