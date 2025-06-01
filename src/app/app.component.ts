import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatToolbarModule, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  title = 'resume-website';

  constructor(private router: Router) {}

  // Navigation Functions
  goHome() {
    this.router.navigate(['/']);
  }
  goAbout() {
    this.router.navigate(['/about'])
  }
}



