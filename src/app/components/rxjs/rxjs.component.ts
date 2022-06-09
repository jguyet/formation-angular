import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';
import { myOf } from 'src/app/shared/utils/my-of';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit, OnDestroy {

  public numberObs$: Observable<string>;

  private subscriptions: Subscription[] = [];

  constructor() {
    this.numberObs$ = myOf('1', '2', '3');

    this.subscriptions.push(this.numberObs$.subscribe(
    (value) => {
      console.log(value);
    }, (err) => {

    }, () => {
      console.log('completed');
    }));
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(x => x.unsubscribe());
  }

}
