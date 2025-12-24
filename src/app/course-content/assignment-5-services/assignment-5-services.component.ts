import {Component, OnInit} from '@angular/core';
import {UsersService} from "./users.service";

@Component({
  selector: 'app-assignment-5-services',
  templateUrl: './assignment-5-services.component.html',
  styleUrl: './assignment-5-services.component.css',
  providers: [UsersService]
})
export class Assignment5ServicesComponent implements OnInit {
  activeUsers: string[] = [];
  inactiveUsers: string[] = [];

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.activeUsers = this.usersService.activeUsers;
    this.inactiveUsers = this.usersService.inactiveUsers;
  }
}
