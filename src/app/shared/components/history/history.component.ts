import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'history',
  },
})
export class HistoryComponent {}
