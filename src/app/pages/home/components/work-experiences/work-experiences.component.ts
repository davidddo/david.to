import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { WorkExperience } from '@website/models';
import { Observable } from 'rxjs';
import { ExperiencesAction } from '@website/store/experiences';
import * as fromExperiences from '@website/store/experiences';

@Component({
  selector: 'work-experiences',
  templateUrl: './work-experiences.component.html',
  styleUrls: ['./work-experiences.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkExperiencesComponent implements OnInit {
  experiences$: Observable<WorkExperience[]>;
  placeholders = 7;

  constructor(private store: Store<fromExperiences.State>) {
    this.experiences$ = this.store.pipe(select(fromExperiences.selectAll));
  }

  ngOnInit() {
    this.store.dispatch(ExperiencesAction.loadExperiences());
  }
}
