import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateClosureMessageComponent } from './create-closure-message.component';

describe('CreateClosureMessageComponent', () => {
  let component: CreateClosureMessageComponent;
  let fixture: ComponentFixture<CreateClosureMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateClosureMessageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateClosureMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
