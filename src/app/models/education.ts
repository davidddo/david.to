import { DateRange } from './date-range';

export interface Education {
  name: string;
  type: string;
  logo?: string;
  dateRange: DateRange;
}
