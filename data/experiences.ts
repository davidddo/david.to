import { WorkExperience } from '@website/models';

export const experiences: WorkExperience[] = [
  {
    type: 'Working Student',
    company: 'MHP Management- und IT-Beratung',
    description: '',
    logo: 'assets/logos/mhp.png',
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
    logo: 'assets/logos/benchkram.png',
    dateRange: {
      start: 'Nov. 2019',
      end: 'Feb. 2020',
    },
  },
  {
    type: 'Research Assistant',
    company: 'Hochschule der Medien Stuttgart',
    description: 'Content-Management with Zope',
    logo: 'assets/logos/hdm.png',
    dateRange: {
      start: 'Nov. 2018',
      end: 'Feb. 2020',
    },
  },
  {
    type: 'Intern',
    company: 'Dekra SE',
    description: 'EUC & Network Management',
    logo: 'assets/logos/dekra.png',
    dateRange: {
      start: 'Jan. 2016',
    },
  },
  {
    type: 'Intern',
    company: 'Bachmann GmbH',
    description: 'Anwendungsentwicklung',
    logo: 'assets/logos/bachmann.png',
    dateRange: {
      start: 'Apr. 2016',
    },
  },
];
