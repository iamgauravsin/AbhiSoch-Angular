import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  template: `
    <!-- Page Header -->
    <div class="container-fluid p-0">
      <div class="page-header pb-5">
        <div class="container text-center py-5">
          <h1 class="display-4 text-uppercase mb-3 animated slideInDown">404 Error</h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol class="breadcrumb justify-content-center text-uppercase mb-0">
              <li class="breadcrumb-item"><a class="text-white" routerLink="/">Home</a></li>
              <li class="breadcrumb-item text-primary active" aria-current="page">404</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>

    <!-- 404 Content -->
    <div class="container-fluid py-5">
      <div class="container py-5">
        <div class="row justify-content-center">
          <div class="col-lg-6 text-center">
            <i class="bi bi-exclamation-triangle display-1 text-primary"></i>
            <h1 class="display-1 text-uppercase" style="font-size: 10rem;">404</h1>
            <h2 class="text-uppercase mb-4">Page Not Found</h2>
            <p class="mb-5">The page you are looking for does not exist. It may have been moved or deleted.</p>
            <a routerLink="/" class="btn btn-outline-primary border-2 py-3 px-5">
              <i class="fa fa-home me-2"></i>Back To Home
            </a>
          </div>
        </div>
      </div>
    </div>
  `
})
export class NotFoundComponent {}
