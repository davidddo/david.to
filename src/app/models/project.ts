import { Color } from './colors';
import { Technology } from './technology';

export interface Project {
  id: string;
  name: string;
  subtitle: string;
  logo: string;
  technologies: Technology[];
  color: Color;
  position: number;
  url?: string | { url: string; target: string };
}
