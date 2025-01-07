import {Image} from './image';
import {Techstack} from './skill';

export interface Project {
  logo: Image;
  title: string;
  description: string;
  techstack: Techstack;
  link: string;
}
