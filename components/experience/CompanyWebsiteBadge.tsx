import {ExternalLink} from 'lucide-react';
import Badge, {BadgeProps} from '@/components/ui/badge';

type Props = BadgeProps & {
  href: string;
  title: string;
};

const CompanyWebsiteBadge = ({title, href, ...props}: Props) => {
  return (
    <Badge icon={ExternalLink} variant="secondary" size="sm" href={href} target="_blank" {...props}>
      {title}
    </Badge>
  );
};

export default CompanyWebsiteBadge;
