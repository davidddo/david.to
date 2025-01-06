import Image from 'next/image';

import {CalendarDays} from 'lucide-react';
import Card, {CardContent} from '@/components/ui/card';

const jobs = [
  {
    role: 'Consultant',
    company: 'MHP Management und IT Beratung GmbH',
    logo: '/company/mhp.png',
    duration: '2020 - Present',
    description:
      'Lead developer for multiple high-impact projects, mentoring junior developers, and implementing best practices.',
    link: 'https://mhp.com',
    images: [],
  },
];

const Experience = () => {
  return (
    <>
      <h2 className="text-xl font-bold mb-4 text-black dark:text-white">Work Experience</h2>
      <Card>
        <CardContent className="pt-6">
          <ul className="space-y-8">
            {jobs.map((j, i) => (
              <li key={i} className="border-b last:border-b-0 pb-8 last:pb-0">
                {/* Job Details */}
                <div className="flex items-center space-x-4">
                  <Image
                    src={j.logo}
                    alt={j.company}
                    width={40}
                    height={40}
                    objectFit="contain"
                    className="rounded-md border shadow-md object-cover"
                  />
                  <div>
                    <h3 className="font-semibold">{j.role}</h3>
                    <p className="text-sm text-muted-foreground">{j.company}</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-2 flex items-center">
                  <CalendarDays className="size-3 mr-2" />
                  {j.duration}
                </p>
                <p className="text-sm mt-2">{j.description}</p>
                {/* Job Images */}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </>
  );
};

export default Experience;
