import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakePaymentOnTransactionComponent } from './make-payment-on-transaction.component';

describe('MakePaymentOnTransactionComponent', () => {
  let component: MakePaymentOnTransactionComponent;
  let fixture: ComponentFixture<MakePaymentOnTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MakePaymentOnTransactionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MakePaymentOnTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
