import { Component } from '@angular/core';
import { Login } from './login/login';
import { ProfileComponent } from './profile/profile';
import { CounterApp } from './counter-app/counter-app';
import { EventChecking } from './event-checking/event-checking';
import { Getsettest } from './getsettest/getsettest';
@Component({
  imports: [Login, ProfileComponent, CounterApp, EventChecking, Getsettest],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  name: string = 'Sourav Das';
  data: string | number = 'hello';
  other: boolean | string | number = true;
  //when multiple data type than we can make variable to any
  alltypeData: any = 'sourav2';
  email = 'sourav.cbr2016@gmail.com';
  getCal(a: number, b: number) {
    return a + b;
  }
  handleClickEvent() {
    alert('Function call hitted');

    console.log('hello');
    this.otherFunction();
  }
  otherFunction() {
    console.log('OtherFunction');
  }
  updateName() {
    this.name = 'sourav2';
    this.other = 'yes sir';
    this.alltypeData = new Object();
    //this.name=20
  }
  updateVar() {
    let x = 30;
  }
  sum(a: number, b: number) {
    console.log(a + b);
  }
}
