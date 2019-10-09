import { Component } from '@angular/core';
import { ProjectList } from '../projects/projectList';
import { SelectableSettings } from '@progress/kendo-angular-grid';

interface IColumns {
    title: string;
    field: string;
}

@Component({
    selector: 'app-kendo-table',
    templateUrl: './kendo-table.component.html',
    styleUrls: ['./kendo-table.component.css']
})

export class KendoTableComponent{
    public gridData: any[] = ProjectList;

    public columns: IColumns[] = [
      {
        title:"Project",
        field: "name"
        },
      {
        title: "Crewmember",
        field: "fullname"
        },
      {
        title: "Position",
        field: "position"
        },
      {
        title: "Startwork",
        field: "startworktype"
        },
      {
        title: "Progress",
        field: "progress"
        },
      {
        title: "To Do",
        field: "approvalstatus"
      }
    ];

    public checkboxOnly = false;
    public mode = 'multiple';
    public selectableSettings: SelectableSettings;

    constructor() {
      this.setSelectableSettings();
    }

    public setSelectableSettings(): void {
      this.selectableSettings = {
        checkboxOnly: this.checkboxOnly,
        mode: this.mode
      };
    }
}
