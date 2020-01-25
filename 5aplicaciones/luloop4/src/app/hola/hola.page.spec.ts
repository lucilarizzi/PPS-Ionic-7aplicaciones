import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HolaPage } from './hola.page';

describe('HolaPage', () => {
  let component: HolaPage;
  let fixture: ComponentFixture<HolaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HolaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HolaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
