import {Metadata} from 'next';

import Experiences from '@/components/experience/Experiences';
import ProfileSection from '@/components/profile/profile-section';
import ProjectsSection from '@/components/projects/projects-section';
import SkillsSection from '@/components/skill/skills-section';

export const metadata: Metadata = {
  title: 'David Tomschitz',
};

export default function Home() {
  return (
    <div className="bg-background min-h-screen">
      <div className="container max-w-screen-lg mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <aside className="max-w-screen-sm md:col-span-1">
            <ProfileSection />
            <SkillsSection />
          </aside>
          <main className="md:col-span-2">
            <ProjectsSection />
            <Experiences />
          </main>
        </div>
      </div>
    </div>
  );
}
