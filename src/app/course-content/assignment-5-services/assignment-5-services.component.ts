import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment-5-services',
  templateUrl: './assignment-5-services.component.html',
  styleUrl: './assignment-5-services.component.css'
})
export class Assignment5ServicesComponent {
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  onSetToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
  }

  onSetToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
  }
}
