import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Formula4Page } from './formula4.page';

describe('Formula4Page', () => {
  let component: Formula4Page;
  let fixture: ComponentFixture<Formula4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Formula4Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Formula4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
