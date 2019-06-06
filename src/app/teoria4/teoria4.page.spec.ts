import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Teoria4Page } from './teoria4.page';

describe('Teoria4Page', () => {
  let component: Teoria4Page;
  let fixture: ComponentFixture<Teoria4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Teoria4Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Teoria4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
