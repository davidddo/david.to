import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'history-item',
  templateUrl: './history-item.component.html',
  styleUrls: ['./history.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'history-item',
  },
})
export class HistoryItemComponent {
  @Input() selected: boolean;
  @Input() isFirst: boolean;
  @Input() isLast: boolean;

  @Output() openHistory: EventEmitter<void> = new EventEmitter<void>();

  constructor(private changeDetector: ChangeDetectorRef) {}

  setSelected(selected: boolean) {
    this.selected = selected;
    this.changeDetector.detectChanges();
  }

  setIsFirst(isFirst: boolean) {
    this.isFirst = isFirst;
    this.changeDetector.detectChanges();
  }

  setIsLast(isLast: boolean) {
    this.isLast = isLast;
    this.changeDetector.detectChanges();
  }
}
