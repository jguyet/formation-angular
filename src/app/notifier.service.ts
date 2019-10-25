import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { counterReducerActions } from './store/app.actions';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotifierService {

  constructor(private store: Store<{ counter: number }>, private httpClient: HttpClient) {
    this.notifierFunc();
  }

  notifierFunc() {
    const parent = this;
    setInterval(() => {
      console.log('BLALBA', parent, counterReducerActions);
      parent.store.dispatch(counterReducerActions.increment());
    }, 1000);
  }

  toto(): Observable<any> {
    return this.httpClient.get<any>('');
  }
}
