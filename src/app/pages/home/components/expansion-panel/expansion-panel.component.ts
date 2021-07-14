import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { DateRange } from '@website/models';
import { map } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.scss'],
  animations: [
    trigger('fade', [
      state('in', style({ opacity: 0 })),
      state('out', style({ opacity: 1 })),
      transition('in => out', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
      transition('out => in', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'expansion-panel',
  },
})
export class ExpansionPanelComponent implements OnInit, OnDestroy {
  private readonly destroy$: Subject<void> = new Subject<void>();

  @Input() title: string;
  @Input() subtitle: string;
  @Input() description: string;
  @Input() img: string;

  @Input() dateRange: DateRange;
  @Input() disabled: boolean;

  isMobile$: Observable<boolean>;
  open: boolean = false;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.isMobile$ = this.breakpointObserver
      .observe(['(min-width: 556px)'])
      .pipe(map(state => state.matches));
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  toggle() {
    if (this.disabled) return;
    this.open = !this.open;
  }
}
