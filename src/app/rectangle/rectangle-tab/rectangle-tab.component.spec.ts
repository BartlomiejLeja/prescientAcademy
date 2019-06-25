import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RectangleTabComponent } from './rectangle-tab.component';

describe('RectangleTabComponent', () => {
  let component: RectangleTabComponent;
  let fixture: ComponentFixture<RectangleTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RectangleTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RectangleTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
