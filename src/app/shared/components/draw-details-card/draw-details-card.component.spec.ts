import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawDetailsCardComponent } from './draw-details-card.component';

describe('DrawDetailsCardComponent', () => {
  let component: DrawDetailsCardComponent;
  let fixture: ComponentFixture<DrawDetailsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrawDetailsCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrawDetailsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
