import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { counterReducerActions } from '../../store/app.actions';
import { NotifierService } from 'src/app/notifier.service';
import { getMaxListeners } from 'cluster';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit, OnDestroy {

  public counter$: Observable<number>;

  private subscription: Subscription = new Subscription();

  constructor(private notifierService: NotifierService, private store: Store<{ count: number }>) {
    this.counter$ = store.select('counter');

    this.subscription.add(store.select('counter').subscribe((count) => {
      console.log('->', count);
    }));
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  increment() {
    this.store.dispatch(counterReducerActions.increment());
  }
 
  decrement() {
    this.store.dispatch(counterReducerActions.decrement());
  }
 
  reset() {
    this.store.dispatch(counterReducerActions.reset());
  }

}
