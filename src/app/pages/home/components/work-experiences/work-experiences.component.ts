import { Component } from '@angular/core';
import { Experience } from '@website/models';

@Component({
  selector: 'work-experiences',
  templateUrl: './work-experiences.component.html',
  styleUrls: ['./work-experiences.component.scss'],
})
export class WorkExperiencesComponent {
  experiences: Experience[] = [
    {
      type: 'Working Student',
      company: 'MHP Management- und IT-Beratung',
      description: '',
      logo: 'mhp.png',
      date: {
        start: 'Mar. 2020',
        end: undefined,
        current: true,
      },
    },
    {
      type: 'Working Student',
      company: 'Benchkram Software GmbH',
      description: '',
      logo: 'benchkram.png',
      date: {
        start: 'Nov. 2019',
        end: 'Feb. 2020',
      },
    },
    {
      type: 'Research Assistant',
      company: 'Hochschule der Medien Stuttgart',
      description: '',
      logo: 'hdm.png',
      date: {
        start: 'Nov. 2018',
        end: 'Feb. 2020',
      },
    },
  ];
}
