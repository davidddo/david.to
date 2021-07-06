import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { WorkExperience } from '@website/models';
import { map } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss'],
})
export class WorkExperienceComponent implements OnInit, OnDestroy {
  private readonly destroy$: Subject<void> = new Subject<void>();

  @Input() experience: WorkExperience;
  isMobile$: Observable<boolean>;

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
}
