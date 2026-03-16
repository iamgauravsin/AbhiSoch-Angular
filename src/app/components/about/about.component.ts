import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { Model } from '../../models/poseify.model';

declare const $: any;
declare const WOW: any;

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit, AfterViewInit, OnDestroy {
  models: Model[] = [];
  signupEmail = '';

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.models = this.dataService.getModels();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      if (typeof WOW !== 'undefined') {
        new WOW({ boxClass: 'wow', animateClass: 'animated', offset: 0, mobile: true, live: false }).init();
      }
    }, 200);
  }

  ngOnDestroy(): void {
    if (typeof $ !== 'undefined') {
      $(window).off('scroll.navbar');
    }
  }

  onSignup(): void {
    if (this.signupEmail) {
      alert(`Thank you for signing up with: ${this.signupEmail}`);
      this.signupEmail = '';
    }
  }
}
