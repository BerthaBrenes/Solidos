import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Teoria1Page } from './teoria1.page';

describe('Teoria1Page', () => {
  let component: Teoria1Page;
  let fixture: ComponentFixture<Teoria1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Teoria1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Teoria1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
