import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() page = new EventEmitter<string>();

  onSelect($event: string) {
    this.page.emit($event);
  }
}
