import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RjxsDemo02Component } from './rjxs-demo02.component';

describe('RjxsDemo02Component', () => {
  let component: RjxsDemo02Component;
  let fixture: ComponentFixture<RjxsDemo02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RjxsDemo02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RjxsDemo02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
