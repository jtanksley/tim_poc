import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GridModule } from '@progress/kendo-angular-grid';


import { KendoTableComponent } from './kendo-table.component';



describe('KendoTableComponent', () => {
  let component: KendoTableComponent;
  let fixture: ComponentFixture<KendoTableComponent>;

  beforeEach(async(() => {
      TestBed.configureTestingModule({
          declarations: [KendoTableComponent],
          imports: [GridModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KendoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
