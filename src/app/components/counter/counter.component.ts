import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset, mult, add } from '../../store/counter/counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  public counter$: Observable<number>;

  constructor(private store: Store<any>) {
    this.counter$ = store.select('counter');
  }

  ngOnInit() {
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }

  mult(value: number) {
    this.store.dispatch(mult({ n: value }));
  }

  add(value: number) {
    this.store.dispatch(add({ n: value }));
  }
}
 