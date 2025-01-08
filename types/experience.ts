import {Image} from './image';
import { Skill } from './skill';

export interface Experience {
  company: Company;
  role: string;
  duration: Duration;
  employmentType?: EmploymentType;
  description?: string;
  steps?: ExperienceStep[];
}

export interface ExperienceStep {
  role: string;
  duration: Duration;
  employmentType: EmploymentType;
  location?: string;
  description?: string;
  skills?: Skill[];
}

export interface Duration {
  start: string;
  end?: string;
}

export interface Company {
  logo: Image;
  name: string;
  website?: string;
}

export type EmploymentType = 'full-time' | 'part-time' | 'freelance' | 'internship';
