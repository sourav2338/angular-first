import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-counter-app',
  styleUrl: './counter-app.css',
  templateUrl: './counter-app.html',
})
export class CounterApp {
  count = 0;
  handleIncrement() {
    this.count++;
  }
  handleReset() {
    this.count = 0;
  }
  handleDecrement() {
    this.count--;
  }
  handleCounter(value: number) {
    if (value === 1) {
      this.handleIncrement();
    } else if (value === 0) {
      this.handleReset();
    } else if (value === -1) {
      if (this.count > 0) {
        this.handleDecrement();
      }
    }
  }
}
