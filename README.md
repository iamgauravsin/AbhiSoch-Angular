# Poseify Angular Application

A fully converted Angular 17 application from the original Poseify HTML/CSS/JS template.

## Project Structure

```
poseify-angular/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── navbar/         # Sticky navbar with Angular Router links
│   │   │   ├── footer/         # Footer component
│   │   │   ├── spinner/        # Loading spinner
│   │   │   ├── home/           # Home page (carousel, services, team, testimonials)
│   │   │   ├── about/          # About page
│   │   │   ├── contact/        # Contact page with reactive form
│   │   │   └── not-found/      # 404 page
│   │   ├── models/
│   │   │   └── poseify.model.ts  # TypeScript interfaces
│   │   ├── services/
│   │   │   └── data.service.ts   # Centralized data service
│   │   ├── app.component.ts
│   │   ├── app.config.ts
│   │   └── app.routes.ts
│   ├── assets/
│   │   ├── css/                # Bootstrap + custom styles
│   │   └── img/                # All images
│   ├── index.html
│   ├── main.ts
│   └── styles.css
├── angular.json
├── package.json
└── tsconfig.json
```

## Key Angular Features

- **Standalone Components** (Angular 17)
- **Angular Router** with lazy-friendly route definitions
- **Services & Dependency Injection** (DataService for all content data)
- **TypeScript Models** (Model, Service, Testimonial interfaces)
- **Two-way Data Binding** (ngModel for forms)
- **Structural Directives** (*ngFor, *ngIf)
- **HostListener** for scroll events (sticky navbar, back-to-top)
- **Lifecycle Hooks** (OnInit, AfterViewInit for WOW.js / Owl Carousel init)

## Prerequisites

- Node.js 18+
- Angular CLI 17+

```bash
npm install -g @angular/cli
```

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
ng serve

# Open browser
# Navigate to http://localhost:4200
```

## Build for Production

```bash
ng build --configuration production
```

Output will be in `dist/poseify-angular/`.

## Pages / Routes

| Route      | Component       | Description              |
|------------|-----------------|--------------------------|
| `/`        | HomeComponent   | Full landing page        |
| `/about`   | AboutComponent  | About agency + models    |
| `/contact` | ContactComponent| Contact form + map       |
| `/404`     | NotFoundComponent| 404 error page          |

## Notes

- WOW.js animations are initialized in `AfterViewInit` lifecycle hooks
- Owl Carousel for testimonials is initialized via jQuery in `AfterViewInit`
- All external libraries (Bootstrap, jQuery, WOW.js, Owl Carousel) loaded via CDN in `index.html`
- Images are served from `src/assets/img/`
