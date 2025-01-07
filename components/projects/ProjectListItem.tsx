import Link from 'next/link';

import {Project} from '@/types';
import SkillBadge from '@/components/skill/skill-badge';

type Props = {
  project: Project;
};

const ProjectListItem = ({project}: Props) => {
  return (
    <div className="flex flex-col h-full py-2 px-6 duration-150 transition-colors sm:px-6 hover:bg-secondary/80 hover:cursor-pointer">
      <Link href={project.link} target="_blank">
        <div className="font-semibold text-primary ">{project.title}</div>
        <p className="text-sm text-muted-foreground my-1">{project.description}</p>
        <div className="mt-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {project.techstack.map((skill) => (
              <SkillBadge key={skill} skill={skill} size="sm" />
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProjectListItem;
