import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConceptosPage } from './conceptos.page';

describe('ConceptosPage', () => {
  let component: ConceptosPage;
  let fixture: ComponentFixture<ConceptosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConceptosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConceptosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
