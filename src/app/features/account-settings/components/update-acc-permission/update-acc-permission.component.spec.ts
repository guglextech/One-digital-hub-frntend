import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAccPermissionComponent } from './update-acc-permission.component';

describe('UpdateAccPermissionComponent', () => {
  let component: UpdateAccPermissionComponent;
  let fixture: ComponentFixture<UpdateAccPermissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateAccPermissionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateAccPermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
