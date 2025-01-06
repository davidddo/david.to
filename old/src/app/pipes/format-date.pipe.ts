import { PipeTransform, Pipe } from '@angular/core';
import * as dayjs from 'dayjs';

@Pipe({ name: 'formatDate', pure: true })
export class FormatDatePipe implements PipeTransform {
  transform(date: string) {
    return dayjs(date).format('MMM. YYYY');
  }
}
