import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateForecastMessageComponent } from './create-forecast-message.component';

describe('CreateForecastMessageComponent', () => {
  let component: CreateForecastMessageComponent;
  let fixture: ComponentFixture<CreateForecastMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateForecastMessageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateForecastMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
