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
  serverCreated: boolean = false;
  servers: Array<string> = ['Testserver', 'Testserver 2'];

  constructor() {
    setTimeout(
      () => this.waitingForNewServer = false,
      5000
    )
  }

  onServerCreated() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  // logModel(myVar) {
  //   console.log(myVar);
  // }
}
