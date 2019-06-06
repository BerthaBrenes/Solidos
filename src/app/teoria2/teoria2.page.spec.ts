import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Teoria2Page } from './teoria2.page';

describe('Teoria2Page', () => {
  let component: Teoria2Page;
  let fixture: ComponentFixture<Teoria2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Teoria2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Teoria2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
