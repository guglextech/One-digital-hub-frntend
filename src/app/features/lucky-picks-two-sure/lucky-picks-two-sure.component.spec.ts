import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuckyPicksTwoSureComponent } from './lucky-picks-two-sure.component';

describe('LuckyPicksTwoSureComponent', () => {
  let component: LuckyPicksTwoSureComponent;
  let fixture: ComponentFixture<LuckyPicksTwoSureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LuckyPicksTwoSureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LuckyPicksTwoSureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
