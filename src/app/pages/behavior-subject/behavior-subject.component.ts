import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-behavior-subject',
  imports: [
    CommonModule
  ],
  templateUrl: './behavior-subject.component.html',
  styleUrl: './behavior-subject.component.css'
})
export class BehaviorSubjectComponent {

  subject$: BehaviorSubject<number> = new BehaviorSubject<number>(123);

  constructor() {
    // two new subscribers will get initial value => output: 123, 123
    this.subject$.subscribe(console.log);
    this.subject$.subscribe(console.log);

    // two subscribers will get new value => output: 456, 456
    this.subject$.next(456);

    // new subscriber will get latest value (456) => output: 456
    this.subject$.subscribe(console.log);

    // all three subscribers will get new value => output: 789, 789, 789
    this.subject$.next(789);
  }

}
