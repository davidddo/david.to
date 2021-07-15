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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectComponent {
  @Input() project: Project;
  @Output() onNavigate: EventEmitter<void> = new EventEmitter<void>();

  imageLoaded: boolean;

  onImageLoad(event: Event) {
    this.imageLoaded = true;
    console.log(event);
  }

  getBackgroundStyle() {
    if (!this.project) return {};
    return { 'background-color': colors[this.project.color][100] };
  }
}
