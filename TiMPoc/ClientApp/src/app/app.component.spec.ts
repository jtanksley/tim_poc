import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { GridModule } from '@progress/kendo-angular-grid';


import { AppComponent } from './app.component';

@Component({ selector: 'app-projects', template: '' })
class ProjectsComponent { }

@Component({ selector: 'app-main-nav', template: '' })
class MainNavComponent { }

@Component({ selector: 'app-kendo-table', template: '' })
class KendoTableComponent { }

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [AppComponent, ProjectsComponent, MainNavComponent, KendoTableComponent],
        imports: [GridModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
