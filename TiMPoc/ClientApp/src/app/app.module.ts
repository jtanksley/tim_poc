import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatTreeModule,
    MatDividerModule,
    MatListModule,
    MatGridListModule,
    MatExpansionModule,
    MatTooltipModule,
    MatProgressBarModule,
    MatCheckboxModule,
    MatInputModule,
    MatProgressSpinnerModule} from '@angular/material';
import { MainNavComponent } from '../main-nav/main-nav.component';
import { environment } from '../environments/environment';
import { PacketComponent } from './packet/packet.component';
import { CrewComponent } from './crew/crew.component';
import { ProjectsComponent } from './projects/projects.component';
import { ApprovalTableComponent } from './approval-table/approval-table.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';





@
NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    PacketComponent,
    CrewComponent,
    ProjectsComponent,
    ApprovalTableComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    FlexLayoutModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatExpansionModule,
    MatGridListModule,
    MatTreeModule,
    MatListModule,
    MatDividerModule,
    MatTooltipModule,
    MatProgressBarModule,
      MatCheckboxModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatSortModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
