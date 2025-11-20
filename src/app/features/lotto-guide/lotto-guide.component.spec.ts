import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LottoGuideComponent } from './lotto-guide.component';

describe('LottoGuideComponent', () => {
  let component: LottoGuideComponent;
  let fixture: ComponentFixture<LottoGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LottoGuideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LottoGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
