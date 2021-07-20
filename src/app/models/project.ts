import { Color } from './colors';
import { Technology } from './technology';

export interface Project {
  id: string;
  name: string;
  subtitle: string;
  img: string;
  technologies: Technology[];
  color: Color;
  position: number;
  url?: string;
}
