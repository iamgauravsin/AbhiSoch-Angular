import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, SpinnerComponent],
  template: `
    <app-spinner></app-spinner>
    <app-navbar></app-navbar>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
    <a routerLink="/" class="btn btn-outline-primary border-2 btn-lg-square back-to-top" id="backToTop">
      <i class="bi bi-arrow-up"></i>
    </a>
  `
})
export class AppComponent {}
