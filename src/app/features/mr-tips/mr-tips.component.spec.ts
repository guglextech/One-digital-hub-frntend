import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MrTipsComponent } from './mr-tips.component';

describe('MrTipsComponent', () => {
  let component: MrTipsComponent;
  let fixture: ComponentFixture<MrTipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MrTipsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MrTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
