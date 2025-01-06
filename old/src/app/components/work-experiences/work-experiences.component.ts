import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { WorkExperience } from '@website/models';

@Component({
  selector: 'work-experiences',
  templateUrl: './work-experiences.component.html',
  styleUrls: ['./work-experiences.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkExperiencesComponent {
  @Input() experiences: WorkExperience[];
}
