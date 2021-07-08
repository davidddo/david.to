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
      logo: 'svv.png',
      techstack: ['Angular', 'NestJS', 'MongoDB'],
      backgroundClass: 'bg-red-100',
    },
    {
      name: 'Bar Brawler',
      subtitle: '',
      logo: 'svv.png',
      techstack: ['Unity', 'Blender'],
      backgroundClass: 'bg-yellow-900',
    },
    {
      name: 'Bingo App',
      subtitle:
        'A student project with the goal of creating a bingo web app using React and Deno',
      logo: 'bingo.png',
      techstack: ['React', 'Deno', 'MongoDB'],
      backgroundClass: 'bg-indigo-100',
    },
    {
      name: 'Weather App',
      subtitle:
        'A student project with the goal of creating a weather app for Android',
      logo: 'weatherapp.png',
      techstack: ['Android', 'SQLite'],
      backgroundClass: 'bg-yellow-100',
    },
    {
      name: 'Space Invaders',
      subtitle: '',
      logo: 'svv.png',
      techstack: ['Unity', 'Blender'],
      backgroundClass: 'bg-yellow-900',
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
