import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Education } from '@website/models';

@Component({
  selector: 'educations',
  templateUrl: './educations.component.html',
  styleUrls: ['./educations.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EducationsComponent {
  @Input() educations: Education[];
}
