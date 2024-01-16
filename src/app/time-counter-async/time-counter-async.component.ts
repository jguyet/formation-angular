import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-time-counter-async',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './time-counter-async.component.html',
  styleUrl: './time-counter-async.component.css'
})
export class TimeCounterAsyncComponent {

  timerPromise: Promise<number> = new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });

  timerObs: BehaviorSubject<number> = new BehaviorSubject(0);

  constructor() {
    let count = 0;
    setInterval(() => {
      count += 1;
      //AGAGGA
      this.timerObs.next(count);
    }, 1000);
  }

}
