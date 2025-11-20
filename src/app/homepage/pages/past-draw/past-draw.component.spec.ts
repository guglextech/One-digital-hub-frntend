import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastDrawComponent } from './past-draw.component';

describe('PastDrawComponent', () => {
  let component: PastDrawComponent;
  let fixture: ComponentFixture<PastDrawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PastDrawComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PastDrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
