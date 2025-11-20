import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LottoBibleComponent } from './lotto-bible.component';

describe('LottoBibleComponent', () => {
  let component: LottoBibleComponent;
  let fixture: ComponentFixture<LottoBibleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LottoBibleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LottoBibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
