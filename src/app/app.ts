import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet],
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
