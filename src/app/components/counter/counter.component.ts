import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { decrement, increment, reset } from 'src/app/redux/counter-action';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  count$: Observable<number>;

  constructor(private store: Store<{ counter: number }>) {
    this.count$ = this.store.select('counter').pipe(
      tap((nbr) => {
        console.log(`mon Number ${nbr}`);
      })
    );
  }

  ngOnInit(): void {
  }

  increment() {
    this.store.dispatch(increment({ nbr: 2 }));
  }
 
  decrement() {
    this.store.dispatch({ type: '[Counter Component] Decrement' });
  }
 
  reset() {
    this.store.dispatch(reset());
  }

}
