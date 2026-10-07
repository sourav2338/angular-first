import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-event-checking',
  styleUrl: './event-checking.css',
  templateUrl: './event-checking.html',
})
export class EventChecking {
  clickEvent(event: any) {
    console.log('click event hitted', event);
  }

  onMouseEnter() {
    console.log('Mouse entered the box');
  }
  onmouseLeave() {
    console.log('Mouse left the box');
  }
}
