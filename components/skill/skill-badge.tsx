import {ReactNode} from 'react';
import {
  FaGolang,
  FaJava,
  FaPython,
  FaMicrosoft,
  FaAws,
  FaAngular,
  FaNodeJs,
  FaFlutter,
  FaUnity,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaGitlab,
  FaJenkins,
  FaReact,
} from 'react-icons/fa6';
import {RiNextjsFill, RiFirebaseFill} from 'react-icons/ri';
import {BiLogoPostgresql} from 'react-icons/bi';
import {SiRedis, SiTypescript, SiMongodb, SiNestjs, SiDeno, SiBlender, SiApachekafka} from 'react-icons/si';

import {Skill} from '@/types/skill';
import Badge, {BadgeProps} from '../ui/badge';

type Props = BadgeProps & {
  skill: Skill;
};

const icons: Record<string, ReactNode> = {
  'TypeScript': <SiTypescript />,
  'Go': <FaGolang />,
  'Java': <FaJava />,
  'Python': <FaPython />,

  'Azure': <FaMicrosoft />,
  'AWS': <FaAws />,
  'Firebase': <RiFirebaseFill />,

  'MongoDB': <SiMongodb />,
  'PostgreSQL': <BiLogoPostgresql />,
  'Redis': <SiRedis />,
  'Firestore': <RiFirebaseFill />,

  'Next.js': <RiNextjsFill />,
  'Nest.js': <SiNestjs />,
  'Angular': <FaAngular />,
  'React': <FaReact />,
  'Node.js': <FaNodeJs />,
  'Deno': <SiDeno />,
  'Flutter': <FaFlutter />,
  'Unity': <FaUnity />,
  'Blender': <SiBlender />,
  'Docker': <FaDocker />,
  'Git': <FaGitAlt />,
  'GitHub': <FaGithub />,
  'GitLab': <FaGitlab />,
  'Jenkins': <FaJenkins />,
  'Kafka': <SiApachekafka />,
};

const SkillBadge = ({skill, ...props}: Props) => {
  const icon = icons[skill];

  return (
    <Badge key={skill} variant="secondary" {...props}>
      {icon && <span className="mr-2">{icon}</span>}
      {skill}
    </Badge>
  );
};

export default SkillBadge;
