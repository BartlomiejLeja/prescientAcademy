import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleInsideRectangleCanvaComponent } from './circle-inside-rectangle-canva.component';

describe('CircleInsideRectangleCanvaComponent', () => {
  let component: CircleInsideRectangleCanvaComponent;
  let fixture: ComponentFixture<CircleInsideRectangleCanvaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircleInsideRectangleCanvaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircleInsideRectangleCanvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
