import { PipeTransform, Pipe } from '@angular/core';
import { DateRange } from '@website/models';
import * as dayjs from 'dayjs';

@Pipe({ name: 'dateRange', pure: true })
export class DateRangePipe implements PipeTransform {
  transform(range: DateRange) {
    const diff = dayjs(range.end).diff(dayjs(range.start), 'months', true);

    if (diff < 12) {
      const months = Math.floor(diff);
      return `${months} months`;
    } else if (diff > 12) {
      const years = Math.floor(diff / 12);
      const months = Math.floor(years * 12 - diff / 12);
      return `${years} year and ${months} months`;
    } else {
      return `1 year`;
    }
  }
}
