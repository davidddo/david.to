import { DateRange } from './date-range';

export interface Education {
  id: string;
  name: string;
  type: string;
  logo?: string;
  dateRange: DateRange;
}
