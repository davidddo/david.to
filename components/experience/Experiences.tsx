import {Experience} from '@/types';
import Card, {CardContent, CardHeader, CardTitle} from '@/components/ui/card';

import ExperienceListItem from './ExperienceListItem';

const experiences: Experience[] = [
  {
    company: {
      name: 'MHP Management und IT Beratung GmbH',
      website: 'https://mhp.com',
      logo: {
        src: '/company/mhp.png',
      },
    },
    role: 'Consultant',
    duration: {
      start: '2020',
    },
    steps: [
      {
        role: 'Consultant',
        employmentType: 'full-time',
        location: 'Ludwigsburg, Baden-Württemberg, Deutschland',
        duration: {
          start: 'Aug 2022',
        },
      },
      {
        role: 'Junior Consultant',
        employmentType: 'full-time',
        location: 'Ludwigsburg, Baden-Württemberg, Deutschland',
        duration: {
          start: 'Mar 2022',
          end: 'Aug 2022',
        },
      },
      {
        role: 'Working Student',
        employmentType: 'part-time',
        location: 'Heimsheim, Baden-Württemberg, Deutschland',
        duration: {
          start: 'Sep 2020',
          end: 'Mar 2022',
        },
      },
      {
        role: 'Intern',
        employmentType: 'internship',
        duration: {
          start: 'Mar 2020',
          end: 'Sep 2020',
        },
        description: 'test',
      },
    ],
  },
  {
    company: {
      name: 'Benchkram Software GmbH',
      website: 'https://mhp.com',
      logo: {
        src: '/company/benchkram.png',
      },
    },
    role: 'Working Student',
    employmentType: 'part-time',

    duration: {
      start: 'Nov 2019',
      end: 'Feb 2020',
    },
  },
  {
    company: {
      name: 'Hochschule der Medien Stuttgart',
      website: 'https://www.hdm-stuttgart.de/',
      logo: {
        src: '/company/hdm.png',
      },
    },
    role: 'Research Assistant',
    employmentType: 'part-time',
    duration: {
      start: 'Nov 2018',
      end: 'Feb 2020',
    },
  },
];

const Experiences = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Work Experience</CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <ul className="space-y-4 sm:space-y-6">
          {experiences.map((experience, i) => (
            <ExperienceListItem key={i} experience={experience} />
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default Experiences;
