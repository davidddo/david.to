import {ExperienceStep} from '@/types';
import Badge, {BadgeProps} from '@/components/ui/badge';

type Props = BadgeProps & {
  employmentType: ExperienceStep['employmentType'];
};

const nameMap: Record<ExperienceStep['employmentType'], string> = {
  'full-time': 'Full-Time',
  'part-time': 'Part-Time',
  freelance: 'Freelance',
  internship: 'Internship',
  volunteer: 'Volunteer',
};

const EmploymentTypeBadge = ({employmentType, ...props}: Props) => {
  return (
    <Badge variant="secondary" size="sm" {...props}>
      {nameMap[employmentType]}
    </Badge>
  );
};

export default EmploymentTypeBadge;
