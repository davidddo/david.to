import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Color, colors, Technology } from '@website/models';

@Component({
  selector: 'technology-chips',
  templateUrl: './technology-chips.component.html',
  styleUrls: ['./technology-chips.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TechnologyChipsComponent {
  @Input() technologies: Technology[];
  usedColors: string[] = [];

  getBackgroundStyle() {
    const color = this.getRandomColor();
    return {
      'background-color': colors[color][100],
      color: colors[color][900],
    };
  }

  getRandomColor() {
    const random = Math.floor(Math.random() * Object.keys(colors).length);
    const color = Object.keys(colors)[random];

    if (this.usedColors.includes(color)) {
      return this.getRandomColor();
    }

    this.usedColors.push(color);
    return color;
  }
}
