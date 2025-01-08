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
        location: 'Ludwigsburg, Baden-Württemberg, Germany',
        duration: {
          start: 'Aug 2022',
        },
        description:
          'Development in an agile environment with a focus on delivering high quality software that distributes OTA updates for vehicles of a well known German automotive company.',
        skills: ['Azure', 'Go', 'Angular', 'MongoDB', 'Kafka', 'GitLab'],
      },
      {
        role: 'Junior Consultant',
        employmentType: 'full-time',
        location: 'Ludwigsburg, Baden-Württemberg, Germany',
        duration: {
          start: 'Mar 2022',
          end: 'Aug 2022',
        },
        skills: ['Go', 'Angular', 'MongoDB', 'GitLab'],
      },
      {
        role: 'Working Student',
        employmentType: 'part-time',
        location: 'Heimsheim, Baden-Württemberg, Germany',
        duration: {
          start: 'Sep 2020',
          end: 'Mar 2022',
        },
        description:
          'Independent collaboration with an agile development team that provided a comprehensive CI/CD pipeline for numerous development teams from a large German automotive group',
        skills: ['Jenkins', 'CI/CD'],
      },
      {
        role: 'Intern',
        employmentType: 'internship',
        location: 'Heimsheim, Baden-Württemberg, Germany',
        duration: {
          start: 'Mar 2020',
          end: 'Sep 2020',
        },
        description:
          'Created a web application for developers of a well known German automotive group where they are able to manage testbeds in a simulation software which was only available in the terminal.',
        skills: ['Angular', 'Python', 'GitHub'],
      },
    ],
  },
  {
    company: {
      name: 'Benchkram Software GmbH',
      website: 'https://benchkram.de/',
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
    description:
      'Developed a MVP mobile app for a streaming service where coaches of handball teams can analyze the overall performance by reviewing game footage and rewatching key moments.',
    skills: ['Flutter'],
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
    description: 'Managed and maintained parts of the official website of the Hochschule der Medien Stuttgart. ',
    skills: ['Python', 'MySQL'],
  },
  {
    company: {
      name: 'Sportverein Vaihingen 1889 e.V. (Handball)',
      website: 'https://svv-handball.de/',
      logo: {
        src: '/company/svv.png',
        alt: 'SVV Handball Logo',
      },
    },
    duration: {
      start: '2016',
    },
    role: 'IT Administrator',
    employmentType: 'volunteer',
    description: 'Development and maintenance of the website of the Handball club SV-Vaihingen.',
    skills: ['Next.js', 'Nest.js', 'MongoDB', 'Prisma', 'TailwindCSS'],
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
