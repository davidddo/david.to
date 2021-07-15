import { DateRange } from './date-range';
import { WorkSection } from './work-section';

export interface WorkExperience {
  id: string;
  type: string;
  company: string;
  description: string;
  logo: string;
  dateRange: DateRange;
  sections?: WorkSection[];
}
