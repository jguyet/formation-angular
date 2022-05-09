import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

/**
 * copy of Of without typing ...
 */
const myOf = (... args) => {
  return new Observable((s) => {
    args.forEach((arg, i) => {
      s.next(arg);
      if (i == args.length - 1) s.complete();
    });
  });
}

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements OnInit {

  constructor() {
    of(0, 1, 2).subscribe((value) => { // events en succes
      console.log(`EVENT ${value}`);
    }, () => { // errors
      
    }, () => { // completed
      console.log('COMPLETED');
    });
  }

  ngOnInit() {
  }

}
