import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

declare const WOW: any;

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './contact.component.html'
})
export class ContactComponent implements AfterViewInit {

  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  submitted = false;

  ngAfterViewInit(): void {
    setTimeout(() => {
      if (typeof WOW !== 'undefined') {
        new WOW({
          boxClass: 'wow',
          animateClass: 'animate__animated',
          offset: 0,
          mobile: true,
          live: false
        }).init();
      }
    }, 200);
  }

  onSubmit(): void {
    if (this.formData.name && this.formData.email && this.formData.message) {

      this.submitted = true;

      setTimeout(() => {
        this.submitted = false;

        this.formData = {
          name: '',
          email: '',
          subject: '',
          message: ''
        };

      }, 3000);

    }
  }

}
