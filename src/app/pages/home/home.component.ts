import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Project, WorkExperience } from '@website/models';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  projects: Project[] = [
    {
      name: 'SV Vaihingen Handball',
      subtitle: '',
      techstack: ['Angular', 'NestJS', 'MongoDB'],
    },
  ];

  experiences: WorkExperience[] = [
    {
      type: 'Working Student',
      company: 'MHP Management- und IT-Beratung',
      description: '',
      logo: 'mhp.png',
      dateRange: {
        start: 'Mar. 2020',
        end: undefined,
        current: true,
      },
      sections: [
        {
          position: 'Working Student',
          dateRange: {
            start: 'Mar. 2020',
            end: undefined,
            current: true,
          },
        },
        {
          position: 'Intern',
          dateRange: {
            start: 'Mar. 2020',
            end: undefined,
            current: true,
          },
        },
      ],
    },
    {
      type: 'Working Student',
      company: 'Benchkram Software GmbH',
      description: '',
      logo: 'benchkram.png',
      dateRange: {
        start: 'Nov. 2019',
        end: 'Feb. 2020',
      },
    },
    {
      type: 'Research Assistant',
      company: 'Hochschule der Medien Stuttgart',
      description: '',
      logo: 'hdm.png',
      dateRange: {
        start: 'Nov. 2018',
        end: 'Feb. 2020',
      },
    },
  ];
}
