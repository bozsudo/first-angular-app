import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {LoggingService} from "../logging.service";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent {
  @Input() account: { name: string; status: string };
  @Input() id: number;
  @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();
  private loggingService?: LoggingService;

  constructor() {
    this.loggingService = inject(LoggingService);
  }

  onSetTo(status: string) {
    this.account.status = status;
    this.statusChanged.emit({id: this.id, newStatus: this.account.status});
    this.loggingService.logStatusChange(this.account.status);
  }
}
