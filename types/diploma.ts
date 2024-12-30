export interface TeachingScheme {
  title: string;
  hoursPerWeek: number;
}

export interface Diploma {
  title: string;
  duration: string;
  eligibility: string;
  description: {
    html: string;
  };
  courseContents: {
    html: string;
  };
  industrialTraining: number;
  teachingScheme: TeachingScheme[];
  seats: number;
  slug: string;
}
