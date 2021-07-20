import { DateRange } from './date-range';

export interface WorkExperience {
  id: string;
  type: string;
  company: string;
  description: string;
  img: string;
  position: number;
  dateRange: DateRange;
  sections?: WorkSection[];
}

export interface WorkSection {
  dateRange: DateRange;
  position: string;
  description: string;
}
