import { Component, Input, OnInit } from '@angular/core';
import { Project } from '@website/models';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  @Input() projects: Project[];
  constructor() {}

  ngOnInit(): void {}
}
