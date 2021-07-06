export interface Experience {
  type: string;
  company: string;
  description: string;
  logo: string;
  date: {
    start: string;
    end: string;
    current?: boolean;
  };
}
