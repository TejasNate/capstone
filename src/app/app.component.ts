import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './User/Auth/login/login.component';
import { RegisterComponent } from './User/Auth/register/register.component';
import { NavbarComponent } from './User/Auth/navbar/navbar.component';
import { ReviewComponent } from './User/Auth/review/review.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    ReviewComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'PlayStore';
}
