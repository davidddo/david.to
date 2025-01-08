import {HTMLAttributes, ReactNode} from 'react';
import Link, {LinkProps} from 'next/link';

type Props = LinkProps &
  HTMLAttributes<HTMLAnchorElement> & {
    children: ReactNode;
    icon?: ReactNode;

    target?: string;
  };

const AnimatedLink = ({children, icon, ...props}: Props) => {
  return (
    <Link {...props}>
      {icon}
      <span className="text-sm group-hover:text-primary transition-color duration-200 ease-linear">{children}</span>
    </Link>
  );
};

export default AnimatedLink;
