import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InactiveSubscribersComponent } from './inactive-subscribers.component';

describe('InactiveSubscribersComponent', () => {
  let component: InactiveSubscribersComponent;
  let fixture: ComponentFixture<InactiveSubscribersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InactiveSubscribersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InactiveSubscribersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
