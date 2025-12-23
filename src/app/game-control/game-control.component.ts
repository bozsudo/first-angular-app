import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css'
})
export class GameControlComponent {
  increment: number = 0;
  ref;
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];
  @Output() outputIncrement = new EventEmitter<number>();

  onStart() {
    this.ref = setInterval(() => {
      this.increment++;
      this.outputIncrement.emit(this.increment);
      if (this.increment % 2 === 1) {
        this.oddNumbers.push(this.increment);
      } else {
        this.evenNumbers.push(this.increment);
      }
    }, 1000);
  }

  onEnd() {
    clearInterval(this.ref);
  }

  protected readonly event = event;
}
