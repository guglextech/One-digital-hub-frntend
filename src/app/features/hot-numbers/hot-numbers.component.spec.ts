import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotNumbersComponent } from './hot-numbers.component';

describe('HotNumbersComponent', () => {
  let component: HotNumbersComponent;
  let fixture: ComponentFixture<HotNumbersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HotNumbersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
