import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SureBankerComponent } from './sure-banker.component';

describe('SureBankerComponent', () => {
  let component: SureBankerComponent;
  let fixture: ComponentFixture<SureBankerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SureBankerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SureBankerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
