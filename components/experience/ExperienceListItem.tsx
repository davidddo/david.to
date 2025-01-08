'use client';

import {Experience} from '@/types';
import {cn} from '@/lib/utils';

import Timeline, {
  TimelineItem,
  TimelineHeading,
  TimelineDot,
  TimelineLine,
  TimelineContent,
} from '@/components/ui/timeline';
import SkillBadge from '@/components/skill/skill-badge';

import EmploymentDurationBadge from './EmploymentDurationBadge';
import EmploymentTypeBadge from './EmploymentTypeBadge';
import CompanyWebsiteBadge from './CompanyWebsiteBadge';

type Props = {
  className?: string;
  experience: Experience;
};

const ExperienceListItem = ({experience}: Props) => {
  const steps = experience.steps || [];
  return (
    <li className="border-b pb-4 last:border-b-0 sm:pb-6 last:pb-0">
      <div className="flex items-center space-x-4">
        <div>
          <h3 className="font-semibold">{experience.role}</h3>
          <p className="text-sm text-muted-foreground">{experience.company.name}</p>
          <div className="flex items-center space-x-2">
            <EmploymentDurationBadge duration={experience.duration} />
            {experience.employmentType && <EmploymentTypeBadge employmentType={experience.employmentType} />}
            {experience.company.website && <CompanyWebsiteBadge href={experience.company.website} title="Website" />}
          </div>
        </div>
      </div>
      {experience.description && <div className="mt-2 text-sm text-muted-foreground">{experience.description}</div>}{' '}
      {steps.length !== 0 && (
        <Timeline positions="left" className="mt-4">
          {steps.map((step, index) => {
            const isFirstItem = index === 0;
            const isLastItem = index === steps.length - 1;

            return (
              <TimelineItem key={step.role} status="default">
                <TimelineHeading side="right" className="flex flex-col font-bold">
                  {step.role}
                </TimelineHeading>
                <TimelineDot status={isFirstItem ? 'current' : 'default'} />
                {!isLastItem && <TimelineLine done={isLastItem} />}
                <TimelineContent side="right" className={cn('flex flex-col', isLastItem && 'pb-0 sm:pb-0')}>
                  {step.location && <span className="text-sm font-normal text-muted-foreground">{step.location}</span>}
                  <div className="flex items-center space-x-2">
                    <EmploymentDurationBadge duration={step.duration} />
                    <EmploymentTypeBadge employmentType={step.employmentType} />
                  </div>
                  {step.description && <div className="mt-2 text-sm text-muted-foreground">{step.description}</div>}{' '}
                  <div className="mt-2 flex flex-wrap gap-2">
                    {step.skills?.map((skill) => (
                      <SkillBadge key={skill} skill={skill} size="sm" />
                    ))}
                  </div>
                </TimelineContent>
              </TimelineItem>
            );
          })}
        </Timeline>
      )}
    </li>
  );
};

export default ExperienceListItem;
