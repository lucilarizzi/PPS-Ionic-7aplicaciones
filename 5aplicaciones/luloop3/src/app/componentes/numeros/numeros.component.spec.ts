import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumerosComponent } from './numeros.component';

describe('NumerosComponent', () => {
  let component: NumerosComponent;
  let fixture: ComponentFixture<NumerosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumerosComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
