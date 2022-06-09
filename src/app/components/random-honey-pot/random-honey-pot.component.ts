import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { Card } from 'src/app/shared/models/card';
import { CardApiService } from 'src/app/shared/services/card-api.service';

@Component({
  selector: 'app-random-honey-pot',
  templateUrl: './random-honey-pot.component.html',
  styleUrls: ['./random-honey-pot.component.css']
})
export class RandomHoneyPotComponent implements OnInit {

  public randomCard$: Observable<Card>;
  
  private subject$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  constructor(private cardApiService: CardApiService) {
    this.randomCard$ = this.subject$.pipe(
      mergeMap(() => {
        return this.cardApiService.getRandomCard();
      })
    );
  }

  ngOnInit(): void {
  }

  random() {
    this.subject$.next(true);
  }

}
