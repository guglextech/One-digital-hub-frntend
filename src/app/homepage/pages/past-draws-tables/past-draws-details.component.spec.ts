import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastDrawsDetailsComponent } from './past-draws-details.component';

describe('PastDrawsDetailsComponent', () => {
  let component: PastDrawsDetailsComponent;
  let fixture: ComponentFixture<PastDrawsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PastDrawsDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PastDrawsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
