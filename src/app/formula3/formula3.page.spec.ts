import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Formula3Page } from './formula3.page';

describe('Formula3Page', () => {
  let component: Formula3Page;
  let fixture: ComponentFixture<Formula3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Formula3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Formula3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
