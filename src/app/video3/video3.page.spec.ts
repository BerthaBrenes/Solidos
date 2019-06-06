import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Video3Page } from './video3.page';

describe('Video3Page', () => {
  let component: Video3Page;
  let fixture: ComponentFixture<Video3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Video3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Video3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
