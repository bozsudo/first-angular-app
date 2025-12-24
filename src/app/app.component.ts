import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  page: string = 'assignment-5-services';

  onNavigate($event: string) {
    this.page = $event;
  }
}
