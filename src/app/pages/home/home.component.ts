import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Education, Project, WorkExperience } from '@website/models';

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
      techstack: ['Angular', 'NestJS', 'MongoDB', 'Redis'],
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
      techstack: ['React', 'Deno', 'MongoDB', 'GraphQL'],
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
            end: 'Sep. 2020',
          },
        },
      ],
    },
    {
      type: 'Working Student',
      company: 'Benchkram Software GmbH',
      description: 'App development with Flutter',
      logo: 'benchkram.png',
      dateRange: {
        start: 'Nov. 2019',
        end: 'Feb. 2020',
      },
    },
    {
      type: 'Research Assistant',
      company: 'Hochschule der Medien Stuttgart',
      description: 'Content-Management with Zope',
      logo: 'hdm.png',
      dateRange: {
        start: 'Nov. 2018',
        end: 'Feb. 2020',
      },
    },
    {
      type: 'Intern',
      company: 'Dekra SE',
      description: 'EUC & Network Management',
      logo: 'dekra.png',
      dateRange: {
        start: 'Jan. 2016',
      },
    },
    {
      type: 'Intern',
      company: 'Bachmann GmbH',
      description: 'Anwendungsentwicklung',
      logo: 'bachmann.png',
      dateRange: {
        start: 'Apr. 2016',
      },
    },
  ];

  educations: Education[] = [
    {
      name: 'Hochschule der Medien Stuttgart',
      type: 'Bachelor of Science (Media Informatics)',
      logo: 'hdm.png',
      dateRange: {
        start: '2018',
        end: undefined,
        current: true,
      },
    },
    {
      name: 'IT.Schule Stuttgart',
      type: 'University entrance qualification',
      logo: 'its.png',
      dateRange: {
        start: 'Sep. 2015',
        end: 'Jul. 2017',
      },
    },
    {
      name: 'Rober-Koch-Realschule',
      type: 'Secondary school leaving certificate',
      dateRange: {
        start: 'Sep. 2009',
        end: 'Jul. 2015',
      },
    },
    {
      name: 'Pestalozzischule',
      type: 'Primary school',
      dateRange: {
        start: 'Sep. 2005',
        end: 'Jul. 2009',
      },
    },
  ];
}
