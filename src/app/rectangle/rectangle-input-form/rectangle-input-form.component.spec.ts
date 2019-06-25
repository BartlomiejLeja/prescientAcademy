import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RectangleInputFormComponent } from './rectangle-input-form.component';

describe('RectangleInputFormComponent', () => {
  let component: RectangleInputFormComponent;
  let fixture: ComponentFixture<RectangleInputFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RectangleInputFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RectangleInputFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
