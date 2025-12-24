import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  inactiveToActiveCount = 0;
  activeToInactiveCount = 0;

  countInactiveToActive() {
    this.inactiveToActiveCount++;
    console.log('inactive->active: ' + this.inactiveToActiveCount);
  }

  countActiveToInactive() {
    this.activeToInactiveCount++;
    console.log('active->inactive: ' + this.activeToInactiveCount);
  }
}
