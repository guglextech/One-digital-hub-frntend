import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveSubscribersComponent } from './active-subscribers.component';

describe('ActiveSubscribersComponent', () => {
  let component: ActiveSubscribersComponent;
  let fixture: ComponentFixture<ActiveSubscribersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActiveSubscribersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActiveSubscribersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
