/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InfocontactComponent } from './infocontact.component';

describe('InfocontactComponent', () => {
  let component: InfocontactComponent;
  let fixture: ComponentFixture<InfocontactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfocontactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfocontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
