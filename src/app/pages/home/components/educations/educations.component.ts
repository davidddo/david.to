import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Education } from '@website/models';
import { EducationsAction } from '@website/store/educations';
import { Observable } from 'rxjs';
import * as fromEducations from '@website/store/educations';

@Component({
  selector: 'educations',
  templateUrl: './educations.component.html',
  styleUrls: ['./educations.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EducationsComponent implements OnInit {
  educations$: Observable<Education[]>;
  placeholders = 4;

  constructor(private store: Store<fromEducations.State>) {
    this.educations$ = this.store.pipe(select(fromEducations.selectAll));
  }

  ngOnInit() {
    this.store.dispatch(EducationsAction.loadEducations());
  }
}
