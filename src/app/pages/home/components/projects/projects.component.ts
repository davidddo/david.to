import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Project } from '@website/models';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent {
  @Input() projects: Project[];
}
