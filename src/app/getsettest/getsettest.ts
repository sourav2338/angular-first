import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-getsettest',
  styleUrl: './getsettest.css',
  templateUrl: './getsettest.html',
})
export class Getsettest {
  name = '';
  displayName = '';
  email = '';
  getName(event: Event) {
    let val = (event.target as HTMLInputElement).value;
    this.name = val;
  }
  showName() {
    this.displayName = this.name;
  }

  setName() {
    this.name = 'Hello ';
  }
  getEmail(val: string) {
    this.email = val;
  }
  setEmail() {
    this.email = 'default@testemail.com ';
  }
}
