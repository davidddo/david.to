import { Technology } from './technology';

export interface Project {
  id: string;
  name: string;
  subtitle: string;
  logo: string;
  //technologies: Technology[];
  backgroundClass: string;
  url?: string | { url: string; target: string };
}
