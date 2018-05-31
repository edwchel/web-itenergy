/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HomecompanyComponent } from './homecompany.component';

describe('HomecompanyComponent', () => {
  let component: HomecompanyComponent;
  let fixture: ComponentFixture<HomecompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomecompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomecompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
