import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeometricShapesInputFormComponent } from './geometric-shapes-input-form.component';

describe('GeometricShapesInputFormComponent', () => {
  let component: GeometricShapesInputFormComponent;
  let fixture: ComponentFixture<GeometricShapesInputFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeometricShapesInputFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeometricShapesInputFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
