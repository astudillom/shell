import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [RouterOutlet, MatToolbarModule, MatButtonModule, MatIconModule, MatGridListModule],
  providers: [Router],
  styleUrls: ['./app.scss']
})
export class App {
  protected title = 'shell';

  constructor(private readonly router: Router) { }

  navigateToMfeA() {
    this.router.navigate(['/mfea']);
  }
  navigateToMfeB() {
    this.router.navigate(['/mfeb']);
  }
  navigateToHome() {
    this.router.navigate(['/home']);
  }

}
