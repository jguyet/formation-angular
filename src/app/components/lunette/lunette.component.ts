import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { incrementAction, decrementAction, resetAction } from 'src/app/reducers/lunette/lunette.reducer';

@Component({
  selector: 'app-lunette',
  templateUrl: './lunette.component.html',
  styleUrls: ['./lunette.component.css']
})
export class LunetteComponent {

  public numberOfLunettes$: Observable<number>;

  constructor(public store: Store<{ lunettes: number }>) {
    this.numberOfLunettes$ = store.select('lunettes');
  }
  
  public increment() {
    this.store.dispatch(incrementAction());
  }

  public decrement() {
    this.store.dispatch(decrementAction());
  }

  public reset() {
    this.store.dispatch(resetAction());
  }

}
