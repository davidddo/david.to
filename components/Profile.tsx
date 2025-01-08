'use client';

import Link from 'next/link';
import Image from 'next/image';
import {Github, Linkedin} from 'lucide-react';

import Card, {CardContent} from '@/components/ui/card';
import Button from '@/components/ui/button';

const socials = [
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

const Profile = () => {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex flex-col items-start gap-2 ">
          <div className="w-full flex flex-row justify-between items-top ">
            <div className="flex flex-row md:flex-col items-center md:items-start w-full gap-4">
              <Image
                width={150}
                height={150}
                quality={100}
                priority={true}
                src="/avatar.png"
                alt="Profile Picture"
                className="rounded-full size-12 md:w-full h-auto object-cover border-2"
              />
              <div className="flex flex-col items-start justify-center">
                <h1 className="font-bold md:mt-4 text-xl md:text-2xl">David Tomschitz</h1>
                <p className="text-sm md:text-base text-muted-foreground">Software Engineer</p>
              </div>
            </div>
          </div>

          <p className="mt-2 text-start text-sm text-muted-foregrounld">
            Hi, im David and a full stack software engineer 
          </p>
          <Button className="mt-4 w-full" asChild>
            <a href="mailto:david@tomschitz.de" target="_blank" className="font-semibold uppercase">
              CONTACT ME
            </a>
          </Button>
          <div className="mt-4 flex flex-col space-y-2 border-t border-border pt-4 w-full">
            {socials.map((social, i) => {
              return (
                <Link
                  key={i}
                  href={social.link.href}
                  target="_blank"
                  className="cursor-pointer flex items-center gap-2 group"
                >
                  {social.icon}
                  <span className="text-sm text-muted-foreground group-hover:text-primary transition-color duration-200 ease-linear">
                    /{social.link.name}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Profile;
