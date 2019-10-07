import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

import { ProjectsComponent } from './projects.component';

@Component({ selector: 'mat-icon', template: '' })
class MatIconModule { }

@Component({ selector: 'mat-form-field', template: '' })
class MatFormFieldModule { }

@Component({ selector: 'mat-card, mat-card-subtitle, mat-card-content', template: '' })
class MatCardModule { }

@Component({ selector: 'mat-checkbox', template: '' })
class MatCheckboxModule { }

@Component({ selector: 'mat-progress-bar', template: '' })
class MatProgressBarModule { }

@Component({ selector: 'mat-divider', template: '' })
class MatDividerModule { }


describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsComponent, MatIconModule, MatFormFieldModule, MatCardModule,MatCheckboxModule,MatProgressBarModule,MatDividerModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
