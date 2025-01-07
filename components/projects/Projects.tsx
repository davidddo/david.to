import {Project} from '@/types';
import Card, {CardContent, CardHeader, CardTitle} from '../ui/card';
import ProjectListItem from './ProjectListItem';

const projects: Project[] = [
  {
    logo: {
      src: '/project/svv.png',
      alt: 'Movie Night App Logo',
    },
    title: 'Movie Night',
    description:
      'A web app where friends can vote together for a customly selected list of movies they want to watch on a defined date. Using a restful API design and websockets for real-time communication between the server and clients.',
    techstack: ['Next.js', 'Go', 'MongoDB'],
    link: 'https://movie-night.up.railway.app/',
  },
  {
    logo: {
      src: '/project/svv.png',
      alt: 'SVV Handball Logo',
    },
    title: 'SVV Handball',
    description:
      'Developed the Website and API of the Handball club SV-Vaihingen, aswell as a custom tailored Content-Mangement-System',
    techstack: ['Next.js', 'Nest.js', 'MongoDB'],
    link: 'https://svv-handball.de/',
  },
  {
    logo: {
      src: '/project/svv.png',
      alt: 'Bucket Map Logo',
    },
    title: 'Bucket Map',
    description:
      'Developed the Website and API of the Handball club SV-Vaihingen, aswell as a custom tailored Content-Mangement-System',
    techstack: ['Flutter', 'Firebase'],
    link: 'https://github.com/dtomschitz/bucket-map',
  },
  {
    logo: {
      src: '/project/svv.png',
      alt: 'SVV Handball Logo',
    },
    title: 'Bar Brawler',
    description:
      'A brawler game in which the player tries to survive waves of enemies in a saloon by buying new weapons and having drinks at the bar',
    techstack: ['Unity', 'C#', 'Blender'],
    link: 'https://github.com/dtomschitz/bar-brawler',
  },
  {
    logo: {
      src: '/project/svv.png',
      alt: 'SVV Handball Logo',
    },
    title: 'Bingo',
    description:
      'A brawler game in which the player tries to survive waves of enemies in a saloon by buying new weapons and having a drink at the bar',
    techstack: ['React', 'Deno', 'MongoDB'],
    link: 'https://github.com/dtomschitz/bar-brawler',
  },
];

const Projects = () => {
  return (
    <Card className="mb-6">
      <CardHeader className="pb-4 sm:pb-4">
        <CardTitle>Projects</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col px-0 pb-4 sm:px-0 sm:pb-4">
        {projects.map((p, index) => (
          <ProjectListItem key={`project_${index}`} project={p} />
        ))}
      </CardContent>
    </Card>
  );
};

export default Projects;
