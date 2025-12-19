import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles: [`
    h3 {
      color: dodgerblue;
    }
    .text-white {
      color: white;
    }
  `]
})
export class AppComponent {
  displayState: boolean = false;
  clickCount: number = 0;
  logEvents: Array<[number, Date]> = [];

  onDisplay(event: Event) {
    this.displayState = !this.displayState;
    this.logEvents.push([++this.clickCount, new Date()]);
  }
}
