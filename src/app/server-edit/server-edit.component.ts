import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-server-edit',
  templateUrl: './server-edit.component.html',
  styleUrl: './server-edit.component.css'
})
export class ServerEditComponent {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  // newServerName: string = '';
  newServerContent: string = '';

  onAddServer(serverName: HTMLInputElement) {
    this.serverCreated.emit({serverName: serverName.value, serverContent: this.newServerContent});
  }

  onAddBlueprint(serverName: HTMLInputElement) {
    this.blueprintCreated.emit({serverName: serverName.value, serverContent: this.newServerContent});
  }
}
