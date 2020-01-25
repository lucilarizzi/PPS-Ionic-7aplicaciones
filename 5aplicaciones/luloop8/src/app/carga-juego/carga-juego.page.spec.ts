import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargaJuegoPage } from './carga-juego.page';

describe('CargaJuegoPage', () => {
  let component: CargaJuegoPage;
  let fixture: ComponentFixture<CargaJuegoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargaJuegoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargaJuegoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
