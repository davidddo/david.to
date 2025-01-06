import { DateRange } from './date-range';

export interface Education {
  id: string;
  name: string;
  type: string;
  logo?: string;
  position: number;
  dateRange: DateRange;
}
