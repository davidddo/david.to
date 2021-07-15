import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'avatar',
  },
})
export class AvatarComponent {
  @Input() width: number;
  @Input() height: number;
}
