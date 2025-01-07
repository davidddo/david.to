import {Duration} from '@/types';
import Badge, { BadgeProps } from '@/components/ui/badge';

type Props = BadgeProps & {
  duration: Duration;
};

const EmploymentDurationBadge = ({duration, ...props}: Props) => {
  return (
    <Badge variant="secondary" size="sm" {...props}>
      <span>
        {duration.start} - {duration.end}
      </span>
    </Badge>
  );
};

export default EmploymentDurationBadge;
