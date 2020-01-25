import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotoneraComponent } from './botonera.component';

describe('BotoneraComponent', () => {
  let component: BotoneraComponent;
  let fixture: ComponentFixture<BotoneraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotoneraComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotoneraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
