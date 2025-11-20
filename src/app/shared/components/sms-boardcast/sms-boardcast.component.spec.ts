import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsBoardcastComponent } from './sms-boardcast.component';

describe('SmsBoardcastComponent', () => {
  let component: SmsBoardcastComponent;
  let fixture: ComponentFixture<SmsBoardcastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmsBoardcastComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmsBoardcastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
