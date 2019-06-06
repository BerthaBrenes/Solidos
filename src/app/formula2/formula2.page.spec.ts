import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Formula2Page } from './formula2.page';

describe('Formula2Page', () => {
  let component: Formula2Page;
  let fixture: ComponentFixture<Formula2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Formula2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Formula2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
