import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Teoria3Page } from './teoria3.page';

describe('Teoria3Page', () => {
  let component: Teoria3Page;
  let fixture: ComponentFixture<Teoria3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Teoria3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Teoria3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
