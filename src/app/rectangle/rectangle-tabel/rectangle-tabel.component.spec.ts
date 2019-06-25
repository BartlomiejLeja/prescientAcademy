import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RectangleTabelComponent } from './rectangle-tabel.component';

describe('RectangleTabelComponent', () => {
  let component: RectangleTabelComponent;
  let fixture: ComponentFixture<RectangleTabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RectangleTabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RectangleTabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
