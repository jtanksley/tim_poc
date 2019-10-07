import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ApprovalTableDataSource } from './approval-table-datasource';
import { Project } from '../projects/project';


@Component({
  selector: 'app-approval-table',
  templateUrl: './approval-table.component.html',
  styleUrls: ['./approval-table.component.css']
})
export class ApprovalTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<Project>;
  dataSource: ApprovalTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['name', 'crewmember', 'position', 'startwork','progress','queue'];

  ngOnInit() {
    this.dataSource = new ApprovalTableDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
