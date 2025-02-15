export interface Testimonial {
  stars: number;
  body: string;
  person: string;
  date: Date;
}

export interface HomeViewProps {
  dummyTestimonials: Testimonial[];
}
