import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EsfuerzosPage } from './esfuerzos.page';

describe('EsfuerzosPage', () => {
  let component: EsfuerzosPage;
  let fixture: ComponentFixture<EsfuerzosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsfuerzosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EsfuerzosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
