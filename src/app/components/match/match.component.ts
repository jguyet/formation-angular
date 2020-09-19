import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { winPartyAction, equalsPartyAction, loosePartyAction } from 'src/app/store/reducers/cumulate.reducer';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent {

  public point$: Observable<number>;

  public points: String = "0";

  constructor(public store: Store<{ point: number }>) {
    this.point$ = this.store.select('point');
  }

  win() {
    this.store.dispatch(winPartyAction({ points: +this.points }));
  }

  loose() {
    this.store.dispatch(loosePartyAction());
  }

  equals() {
    this.store.dispatch(equalsPartyAction());
  }

}
