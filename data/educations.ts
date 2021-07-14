import { Education } from '@website/models';

export const educations: Education[] = [
  {
    name: 'Hochschule der Medien Stuttgart',
    type: 'Bachelor of Science (Media Informatics)',
    logo: 'assets/logos/hdm.png',
    dateRange: {
      start: '2018',
      end: undefined,
      current: true,
    },
  },
  {
    name: 'IT.Schule Stuttgart',
    type: 'University entrance qualification',
    logo: 'assets/logos/its.png',
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
