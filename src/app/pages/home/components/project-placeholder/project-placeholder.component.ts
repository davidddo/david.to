import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'project-placeholder',
  templateUrl: './project-placeholder.component.html',
  styleUrls: ['./project-placeholder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectPlaceholderComponent {}
