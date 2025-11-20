import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawVideosComponent } from './draw-videos.component';

describe('DrawVideosComponent', () => {
  let component: DrawVideosComponent;
  let fixture: ComponentFixture<DrawVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrawVideosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrawVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
