import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  EventEmitter,
  OnDestroy,
  Output,
  QueryList,
  ViewEncapsulation,
} from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { HistoryItemComponent } from './history-item.component';

@Component({
  selector: 'history-list',
  template: '<ng-content select="history-item"></ng-content>',
  styleUrls: ['./history.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'history-list',
  },
})
export class HistoryListComponent implements AfterContentInit, OnDestroy {
  private readonly destroy$: Subject<void> = new Subject<void>();

  @Output() selectionChange: EventEmitter<number> = new EventEmitter<number>();
  @ContentChildren(HistoryItemComponent) items: QueryList<HistoryItemComponent>;

  selectedIndex: number;

  ngAfterContentInit() {
    this.setListItems();

    this.items.changes.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.setListItems();
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private setListItems() {
    this.items.forEach((item, index) => {
      item.setSelected(false);

      item.openHistory.pipe(takeUntil(this.destroy$)).subscribe(() => {
        this.selectedIndex = index;
        this.selectionChange.emit(this.selectedIndex);
        this.items.forEach(i => {
          i.setSelected(false);
        });
        item.setSelected(this.selectedIndex === index);
      });
    });
    if (this.items.length !== 0) {
      this.selectedIndex = 0;
      this.items.first.setSelected(true);
    }
  }
}
