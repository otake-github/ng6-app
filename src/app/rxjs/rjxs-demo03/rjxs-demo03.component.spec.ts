import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RjxsDemo03Component } from './rjxs-demo03.component';

describe('RjxsDemo03Component', () => {
  let component: RjxsDemo03Component;
  let fixture: ComponentFixture<RjxsDemo03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RjxsDemo03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RjxsDemo03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
