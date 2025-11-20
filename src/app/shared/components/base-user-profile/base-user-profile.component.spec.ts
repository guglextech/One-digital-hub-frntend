import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseUserProfileComponent } from './base-user-profile.component';

describe('BaseUserProfileComponent', () => {
  let component: BaseUserProfileComponent;
  let fixture: ComponentFixture<BaseUserProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaseUserProfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseUserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
