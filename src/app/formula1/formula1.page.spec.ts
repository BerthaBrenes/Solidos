import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Formula1Page } from './formula1.page';

describe('Formula1Page', () => {
  let component: Formula1Page;
  let fixture: ComponentFixture<Formula1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Formula1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Formula1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
