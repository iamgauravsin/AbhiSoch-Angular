import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div id="spinner" [class.show]="isVisible"
      class="bg-dark position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
      <div class="spinner-grow text-primary" style="width: 3rem; height: 3rem;" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  `
})
export class SpinnerComponent implements OnInit {
  isVisible = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.isVisible = false;
    }, 500);
  }
}
