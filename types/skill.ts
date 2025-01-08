export type Skill = ProgrammingLanaguage | Framework | Database | Tool | Cloud | OperatingSystem| TechnicalTerm ;
export type Techstack = Skill[];

export type Skills = {
  languages: Skill[];
  frameworks: Skill[];
  databases: Skill[];
  tools: Skill[];
  cloud: Skill[];
};

export type ProgrammingLanaguage = 'TypeScript' | 'JavaScript' | 'Go' | 'Python' | 'C#' | 'Java';
export type Framework = 'Flutter' | 'Next.js' | 'Angular' | 'React' | 'Deno' | 'Node.js' | 'Nest.js' | 'Unity';
export type Database = 'PostgreSQL' | 'MySQL' | 'MongoDB' | 'Redis' | 'SQLite' | 'Oracle' | 'Firestore';
export type Tool = 'Docker' | 'Kubernetes' | 'Git' | 'GitHub' | 'GitLab' | 'Jenkins' | 'Blender' | 'Kafka';
export type TechnicalTerm = 'CI/CD' | 'DevOps' | 'Agile' | 'Scrum' | 'Kanban';
export type Cloud = 'Azure' | 'AWS' | 'GCP' | 'Firebase';
export type OperatingSystem = 'Windows' | 'macOS' | 'Linux';
