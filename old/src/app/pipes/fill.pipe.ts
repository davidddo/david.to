import { PipeTransform, Pipe } from '@angular/core';

@Pipe({ name: 'fill', pure: true })
export class FillPipe implements PipeTransform {
  transform(length: number) {
    return Array.from({ length }).map((_, index) => index);
  }
}
