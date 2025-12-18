import { Component } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>
  // `,
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent {
  waitingForNewServer: boolean = true;
  serverCreationStatus: string = 'No server was created!';
  serverName: string = '';
  username: string = '';

  constructor() {
    setTimeout(
      () => this.waitingForNewServer = false,
      5000
    )
  }

  onServerCreated() {
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  // logModel(myVar) {
  //   console.log(myVar);
  // }
}
