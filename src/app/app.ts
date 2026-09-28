import { Component } from '@angular/core';
import { Login } from './login/login';
import { ProfileComponent } from './profile/profile';

@Component({
  imports: [Login, ProfileComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  name = 'Sourav Das';
  email = 'sourav.cbr2016@gmail.com';
  getCal(a: number, b: number) {
    return a + b;
  }
}
