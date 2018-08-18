import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RjxsDemo01Component } from './rjxs-demo01.component';

describe('RjxsDemo01Component', () => {
  let component: RjxsDemo01Component;
  let fixture: ComponentFixture<RjxsDemo01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RjxsDemo01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RjxsDemo01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
