import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'shimmer',
  templateUrl: './shimmer.component.html',
  styleUrls: ['./shimmer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'shimmer',
  },
})
export class ShimmerComponent {}
