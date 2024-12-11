import { Component } from '@angular/core';
import { AsyncSubject } from 'rxjs';

@Component({
  selector: 'app-async-subject',
  imports: [],
  templateUrl: './async-subject.component.html',
  styleUrl: './async-subject.component.css'
})
export class AsyncSubjectComponent {
  subject$ = new AsyncSubject();

  constructor() {
    this.subject$.subscribe(console.log);

    this.subject$.next(123); //nothing logged

    this.subject$.subscribe(console.log);

    this.subject$.next(456); //nothing logged
    this.subject$.complete(); //456, 456 logged by both subscribers
  }
}
