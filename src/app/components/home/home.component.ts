import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import WOW from 'wow.js';

@Component({
	selector: 'app-home',
	standalone: true,
	imports: [CommonModule, FormsModule],
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

	signupEmail = '';

	services = [
		{
			title: 'Fashion Modeling',
			description: 'Professional modeling services.',
			image: 'assets/img/service-1.jpg',
			direction: 'left'
		},
		{
			title: 'Photo Shoots',
			description: 'Creative photo shoots.',
			image: 'assets/img/service-2.jpg',
			direction: 'right'
		}
	];

	models = [
		{
			name: 'Anna Smith',
			image: 'assets/img/team-1.jpg',
			age: 22,
			height: '5.8',
			weight: '55kg',
			bust: '34',
			waist: '26',
			hips: '36'
		}
	];

	testimonials = [
		{
			name: 'John Doe',
			profession: 'Photographer',
			quote: 'Amazing modeling agency!',
			image: 'assets/img/testimonial-1.jpg'
		},
		{
			name: 'Emily Watson',
			profession: 'Designer',
			quote: 'Great experience working with them.',
			image: 'assets/img/testimonial-2.jpg'
		}
	];

	currentTestimonial = 0;

	setTestimonial(index: number) {
		this.currentTestimonial = index;
	}

	onSignup() {
		console.log('Signup email:', this.signupEmail);
	}

	ngAfterViewInit() {
		new WOW().init();
	}
}
