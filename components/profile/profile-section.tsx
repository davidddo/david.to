'use client';

import Link from 'next/link';
import Card, {CardContent} from '@/components/ui/card';
import Button from '@/components/ui/button';
import AnimatedLink from '@/components/ui/animated-link';

import ProfileImage from './profile-image';
import SocialConnections from './social-connections';

const ProfileSection = () => {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex flex-col items-start gap-2 ">
          <div className="w-full flex flex-row justify-between items-top ">
            <div className="flex flex-row md:flex-col items-center md:items-start w-full gap-4">
              <ProfileImage />
              <div className="flex flex-col items-start justify-center">
                <h1 className="font-bold md:mt-4 text-xl md:text-2xl">David Tomschitz</h1>
                <p className="text-sm md:text-base text-muted-foreground">Software Engineer</p>
              </div>
            </div>
          </div>

          <p className="mt-2 text-start text-sm text-muted-foregrounld">
            Hi, im David and a full stack software engineer from Germany whith a passion for building mobile and web
            applications. Currently working for <AnimatedLink href="https://www.mhp.com" target="_blank" className="font-semibold text-primary">MHP</AnimatedLink> and privately on{' '}
            <AnimatedLink href="https://movie-night.up.railway.app/" target="_blank" className="font-semibold text-primary">
              Movie Night
            </AnimatedLink>
          </p>
          <Button className="mt-4 w-full" asChild>
            <a href="mailto:david@tomschitz.de" target="_blank" className="font-semibold uppercase">
              CONTACT ME
            </a>
          </Button>
          <SocialConnections className="mt-4 flex flex-col space-y-2 border-t border-border pt-4 w-full" />
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileSection;
