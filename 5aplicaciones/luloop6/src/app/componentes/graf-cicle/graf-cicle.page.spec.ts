import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrafCiclePage } from './graf-cicle.page';

describe('GrafCiclePage', () => {
  let component: GrafCiclePage;
  let fixture: ComponentFixture<GrafCiclePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrafCiclePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrafCiclePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
