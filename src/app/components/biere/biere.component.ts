import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { filter, map, pairwise, take } from 'rxjs/operators';

@Component({
  selector: 'app-biere',
  templateUrl: './biere.component.html',
  styleUrls: ['./biere.component.css']
})
export class BiereComponent implements OnInit {

  public biere$: BehaviorSubject<number> = new BehaviorSubject<number>(50);

  public biereVide$: Observable<boolean>;

  constructor() {
    this.biereVide$ = this.biere$.pipe(
      filter((q) => q <= 0),
      map(() => true)
    );
  }

  ngOnInit(): void {
  }

  update() {
    this.biere$.next(this.biere$.value - 1);
  }

}
