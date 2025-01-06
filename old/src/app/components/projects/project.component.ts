import {
  animate,
  group,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { colors, Project } from '@website/models';

@Component({
  selector: 'project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  animations: [
    trigger('fade', [
      state('false', style({ opacity: 0 })),
      state('true', style({ opacity: 1 })),
      transition('false => true', [
        group([
          animate(
            '120ms ease-in',
            style({
              opacity: 1,
            }),
          ),
        ]),
      ]),
    ]),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectComponent {
  @Input() project: Project | undefined;
  imageLoaded: boolean = false;

  onImageLoad() {
    this.imageLoaded = true;
  }

  getBackgroundStyle() {
    if (!this.project) return undefined;
    return { 'background-color': colors[this.project.color][100] };
  }
}
