import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from 'src/app/redux/counter/counter.actions';

interface CounterStore {
  count: number
};

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  public currentCount$: Observable<number>; 

  constructor(private store: Store<CounterStore>) {
    this.currentCount$ = this.store.select('count');
  }

  ngOnInit(): void {
  }

  increment() {
    this.store.dispatch(
      { type: "[Counter Component] Increment", nbr: 10 }
    );
  }
 
  decrement() {
    this.store.dispatch(decrement());
  }
 
  reset() {
    this.store.dispatch(reset());
  }

}
