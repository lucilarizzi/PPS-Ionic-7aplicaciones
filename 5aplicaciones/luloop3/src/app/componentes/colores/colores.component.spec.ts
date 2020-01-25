import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColoresComponent } from './colores.component';

describe('ColoresComponent', () => {
  let component: ColoresComponent;
  let fixture: ComponentFixture<ColoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColoresComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
