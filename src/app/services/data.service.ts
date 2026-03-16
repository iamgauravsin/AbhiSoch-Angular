import { Injectable } from '@angular/core';
import { Model, Service, Testimonial } from '../models/poseify.model';

@Injectable({ providedIn: 'root' })
export class DataService {

  getModels(): Model[] {
    return [
      { id: 1, name: 'Naomy Olsen',   image: 'assets/img/team-1.jpg', age: 22, height: 185, weight: 55, bust: 79, waist: 59, hips: 89 },
      { id: 2, name: 'Pamela Torney', image: 'assets/img/team-2.jpg', age: 24, height: 178, weight: 52, bust: 81, waist: 61, hips: 91 },
      { id: 3, name: 'Joanne Irwin',  image: 'assets/img/team-3.jpg', age: 26, height: 180, weight: 57, bust: 83, waist: 63, hips: 93 },
      { id: 4, name: 'Gillian Rowe',  image: 'assets/img/team-4.jpg', age: 23, height: 182, weight: 54, bust: 80, waist: 60, hips: 90 },
      { id: 5, name: 'Naomy Olsen',   image: 'assets/img/team-5.jpg', age: 22, height: 185, weight: 55, bust: 79, waist: 59, hips: 89 },
      { id: 6, name: 'Pamela Torney', image: 'assets/img/team-6.jpg', age: 24, height: 178, weight: 52, bust: 81, waist: 61, hips: 91 },
      { id: 7, name: 'Joanne Irwin',  image: 'assets/img/team-7.jpg', age: 26, height: 180, weight: 57, bust: 83, waist: 63, hips: 93 },
      { id: 8, name: 'Gillian Rowe',  image: 'assets/img/team-8.jpg', age: 23, height: 182, weight: 54, bust: 80, waist: 60, hips: 90 },
    ];
  }

  getServices(): Service[] {
    return [
      {
        id: 1,
        title: 'Fashion Shows',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam feugiat fermentum urna, sed gravida enim eleifend vitae. Ut rhoncus non metus at convallis. Maecenas pharetra placerat mauris.',
        image: 'assets/img/service-1.jpg',
        direction: 'left'
      },
      {
        id: 2,
        title: 'Corporate Events',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam feugiat fermentum urna, sed gravida enim eleifend vitae. Ut rhoncus non metus at convallis. Maecenas pharetra placerat mauris.',
        image: 'assets/img/service-2.jpg',
        direction: 'right'
      },
      {
        id: 3,
        title: 'Commercial Photo Shots',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam feugiat fermentum urna, sed gravida enim eleifend vitae. Ut rhoncus non metus at convallis. Maecenas pharetra placerat mauris.',
        image: 'assets/img/service-3.jpg',
        direction: 'left'
      },
      {
        id: 4,
        title: 'Professional Modeling',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam feugiat fermentum urna, sed gravida enim eleifend vitae. Ut rhoncus non metus at convallis. Maecenas pharetra placerat mauris.',
        image: 'assets/img/service-4.jpg',
        direction: 'right'
      }
    ];
  }

  getTestimonials(): Testimonial[] {
    return [
      {
        id: 1,
        name: 'Joanne Irwin',
        profession: 'Fashion Designer',
        quote: 'Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.',
        image: 'assets/img/testimonial-1.jpg'
      },
      {
        id: 2,
        name: 'Lana Anderson',
        profession: 'Photographer',
        quote: 'Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.',
        image: 'assets/img/testimonial-2.jpg'
      },
      {
        id: 3,
        name: 'Pamela Torney',
        profession: 'Art Director',
        quote: 'Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.',
        image: 'assets/img/testimonial-3.jpg'
      }
    ];
  }
}
