import {HTMLAttributes} from 'react';
import {Github, Linkedin} from 'lucide-react';
import {SocialConnection} from '@/types/social';
import AnimatedLink from '@/components/ui/animated-link';

const socials: SocialConnection[] = [
  {
    name: 'Github',
    link: {
      href: 'https://github.com/dtomschitz',
      name: 'dtomschitz',
    },
    icon: <Github className="size-4" />,
  },
  {
    name: 'LinkedIn',
    link: {
      href: 'https://www.linkedin.com/in/david-tomschitz-10838a140',
      name: 'david-tomschitz',
    },
    icon: <Linkedin className="size-4" />,
  },
];

const SocialConnections = ({className, ...props}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={className} {...props}>
      {socials.map((social, i) => {
        return (
          <AnimatedLink
            key={i}
            icon={social.icon}
            href={social.link.href}
            target="_blank"
            className="cursor-pointer flex items-center gap-2 group text-muted-foreground"
          >
            /{social.link.name}
          </AnimatedLink>
        );
      })}
    </div>
  );
};

export default SocialConnections;
