import { Component, Input } from '@angular/core';

@Component({
  selector: 'fade-container',
  templateUrl: './fade-container.component.html',
  styleUrls: ['./fade-container.component.scss'],
})
export class FadeContainerComponent {
  @Input() object: any;
}
