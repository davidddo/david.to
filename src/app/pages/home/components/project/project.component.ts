import {
  animate,
  group,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { colors, Project } from '@website/models';

@Component({
  selector: 'project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  animations: [
    trigger('imageAnimation', [
      state('false', style({ opacity: 0, filter: 'grayscale(64%)' })),
      state('true', style({ opacity: 1, filter: 'grayscale(0%)' })),
      transition('false => true', [
        group([
          animate(
            '120ms ease-in',
            style({
              opacity: 1,
            }),
          ),
          animate(
            '220ms ease-in',
            style({
              filter: 'grayscale(0%)',
            }),
          ),
        ]),
      ]),
    ]),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectComponent {
  @Input() project: Project;
  @Output() onNavigate: EventEmitter<void> = new EventEmitter<void>();

  imageLoaded: boolean = false;

  onImageLoad() {
    this.imageLoaded = true;
  }

  getBackgroundStyle() {
    if (!this.project) return {};
    return { 'background-color': colors[this.project.color][100] };
  }
}
