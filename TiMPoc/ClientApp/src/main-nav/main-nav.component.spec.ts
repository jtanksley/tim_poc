import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

import { MainNavComponent } from './main-nav.component';

@Component({ selector: 'mat-icon', template: '' })
class MatIconModule { }

@Component({ selector: 'mat-toolbar', template: '' })
class MatToolbarModule { }

describe('MainNavComponent', () => {
  let component: MainNavComponent;
  let fixture: ComponentFixture<MainNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainNavComponent, MatIconModule,MatToolbarModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
