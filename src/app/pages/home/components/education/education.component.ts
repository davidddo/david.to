import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Education } from '@website/models';

@Component({
  selector: 'education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'education',
  },
})
export class EducationComponent {
  @Input() education: Education;
}
