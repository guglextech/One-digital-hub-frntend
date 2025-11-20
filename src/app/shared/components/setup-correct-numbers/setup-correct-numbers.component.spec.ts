import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupCorrectNumbersComponent } from './setup-correct-numbers.component';

describe('SetupCorrectNumbersComponent', () => {
  let component: SetupCorrectNumbersComponent;
  let fixture: ComponentFixture<SetupCorrectNumbersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetupCorrectNumbersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetupCorrectNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
