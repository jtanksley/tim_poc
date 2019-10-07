import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
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
  MatProgressSpinnerModule
} from '@angular/material';

@Component({
    selector: 'app-main-nav',
    templateUrl: './main-nav.component.html',
    styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {
    title = "TiM";
    isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
        .pipe(
            map(result => result.matches),
            shareReplay()
        );

    constructor(private breakpointObserver: BreakpointObserver) { }

}
