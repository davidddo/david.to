import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DateRange } from '@website/models/date-range';

@Component({
  selector: 'date-range',
  templateUrl: './date-range.component.html',
  styleUrls: ['./date-range.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DateRangeComponent {
  @Input() dateRange: DateRange;
  @Input() chip: boolean = true;
}
