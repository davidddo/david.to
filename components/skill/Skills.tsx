import {Skills} from '@/types/skill';
import Card, {CardHeader, CardTitle, CardContent} from '@/components/ui/card';
import SkillBadge from './skill-badge';

const skills: Skills = {
  languages: ['Go', 'TypeScript', 'Java', 'C#', 'Python'],
  cloud: ['Azure', 'Firebase'],
  databases: ['MongoDB', 'PostgreSQL', 'Redis', 'Firestore'],
  frameworks: ['Next.js', 'Angular', 'Node.js', 'Flutter', 'Deno'],
  tools: ['Docker', 'Git', 'GitHub', 'GitLab', 'Jenkins'],
};

const SkillsSection = () => {
  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>Skills</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <div className="flex flex-wrap gap-2">
          {Object.values(skills).map((skills) =>
            skills.map((skill) => {
              return <SkillBadge key={skill} skill={skill} />;
            })
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default SkillsSection;
