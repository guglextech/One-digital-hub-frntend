import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDrawCardComponent } from './add-draw-card.component';

describe('AddDrawCardComponent', () => {
  let component: AddDrawCardComponent;
  let fixture: ComponentFixture<AddDrawCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddDrawCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDrawCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
