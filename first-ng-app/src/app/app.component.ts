import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <h1>Welcome to {{title}}!</h1>
    <p style="background-color: greenyellow;">Hello guyss</p>
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AppComponent {
  title = 'first-ng-app';
}
