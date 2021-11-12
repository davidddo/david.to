import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Colors, colors, Shades, Technology } from '@website/models';

@Component({
  selector: 'technology-chips',
  templateUrl: './technology-chips.component.html',
  styleUrls: ['./technology-chips.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TechnologyChipsComponent {
  @Input() technologies: Technology[];
  usedColors: string[] = [];

  colors: { [key: string]: { [shade in Shades]: string } } = {
    Angular: colors.Red,
    React: colors['Light Blue'],
    NestJS: colors.Amber,
    GraphQL: colors.Purple,
    Deno: colors.Teal,
    Flutter: colors.Blue,
    Android: colors.Green,
    Firebase: colors.Orange,
    MongoDB: colors['Light Green'],
    Unity: colors.Grey,
    Blender: colors['Blue Grey'],
  };

  getBackgroundStyle(technology: string) {
    let color = this.colors[technology];
    if (!color) {
      const random = Math.floor(Math.random() * Object.keys(colors).length);
      color = colors[Object.keys(colors)[random]];
    }

    return {
      'background-color': color[100],
      color: color[900],
    };
  }
}
