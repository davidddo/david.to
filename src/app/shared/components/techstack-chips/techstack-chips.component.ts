import { Component, Input } from '@angular/core';
import { Technology } from '@website/models';

@Component({
  selector: 'techstack-chips',
  templateUrl: './techstack-chips.component.html',
  styleUrls: ['./techstack-chips.component.scss'],
})
export class TechstackChipsComponent {
  @Input() technologies: Technology[];

  getClasses(technology: Technology) {
    if (typeof technology.color === 'string') {
      return `bg-${technology.color}-200 text-${technology.color}-800`;
    }
    
    return `${technology.color.text} ${technology.color.background}`;
  }
}
