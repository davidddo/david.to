import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Project } from '@website/models';

@Component({
  selector: 'project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent {
  @Input() project: Project;
  @Output() onNavigate: EventEmitter<void> = new EventEmitter<void>();
}
