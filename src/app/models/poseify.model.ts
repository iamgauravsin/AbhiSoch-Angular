export interface Model {
  id: number;
  name: string;
  image: string;
  age: number;
  height: number;
  weight: number;
  bust: number;
  waist: number;
  hips: number;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
  direction: 'left' | 'right';
}

export interface Testimonial {
  id: number;
  name: string;
  profession: string;
  quote: string;
  image: string;
}
