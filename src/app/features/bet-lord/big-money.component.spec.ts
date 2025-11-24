import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigMoneyComponent } from './big-money.component';

describe('BigMoneyComponent', () => {
  let component: BigMoneyComponent;
  let fixture: ComponentFixture<BigMoneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BigMoneyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BigMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
