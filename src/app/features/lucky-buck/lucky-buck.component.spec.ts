import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuckyBuckComponent } from './lucky-buck.component';

describe('LuckyBuckComponent', () => {
  let component: LuckyBuckComponent;
  let fixture: ComponentFixture<LuckyBuckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LuckyBuckComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LuckyBuckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
