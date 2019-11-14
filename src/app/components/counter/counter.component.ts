import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { increment, decrement, reset, mult, div } from 'src/app/store/counter.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {

    count$: Observable<number>;
 
    constructor(private store: Store<{ count: number }>) {
      this.count$ = store.select('count');
    }
   
    increment() {
      this.store.dispatch(increment());
    }
   
    decrement() {
      this.store.dispatch(decrement());
    }

    mult() {
        this.store.dispatch(mult({ value: 2 }));
    }

    div() {
        this.store.dispatch(div({ value: 2 }));
    }
   
    reset() {
      this.store.dispatch(reset());
    }

}
