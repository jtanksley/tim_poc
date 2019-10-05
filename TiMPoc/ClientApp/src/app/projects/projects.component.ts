import { Component, OnInit } from '@angular/core';
import { Project} from './project';
import { ProjectList } from './projectList';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
   projects = ProjectList;

  constructor() { }

  ngOnInit() {
  }

}
