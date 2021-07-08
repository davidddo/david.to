import { Component, Input } from '@angular/core';

@Component({
  selector: 'techstack-chips',
  templateUrl: './techstack-chips.component.html',
  styleUrls: ['./techstack-chips.component.scss'],
})
export class TechstackChipsComponent {
  @Input() techstack: string[];
}
