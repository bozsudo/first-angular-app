import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrl: './active-users.component.css'
})
export class ActiveUsersComponent {
  @Input() users: string[];
  @Output() userSetToInactive = new EventEmitter<number>();

  onSetInactive(id: number) {
    this.userSetToInactive.emit(id);
  }
}
