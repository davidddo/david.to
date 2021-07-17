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

@Component({
  selector: 'expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.scss'],
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
  imageLoaded: boolean = false;

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

  onImageLoaded() {
    this.imageLoaded = true;
  }
}
