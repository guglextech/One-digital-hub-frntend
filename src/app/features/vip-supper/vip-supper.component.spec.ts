import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VipSupperComponent } from './vip-supper.component';

describe('VipSupperComponent', () => {
  let component: VipSupperComponent;
  let fixture: ComponentFixture<VipSupperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VipSupperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VipSupperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
