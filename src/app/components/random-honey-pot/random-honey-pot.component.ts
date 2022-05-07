import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { mergeMap, take, tap } from 'rxjs/operators';
import { Card } from 'src/app/shared/models/card';
import { CardApiService } from 'src/app/shared/services/card-api.service';

@Component({
  selector: 'app-random-honey-pot',
  templateUrl: './random-honey-pot.component.html',
  styleUrls: ['./random-honey-pot.component.css']
})
export class RandomHoneyPotComponent implements OnInit {

  public randomCard$: Observable<Card>;
  
  private subject: Subject<boolean> = new Subject<boolean>();

  constructor(private cardApiService: CardApiService) {
  }

  ngOnInit() {

    this.randomCard$ = this.subject.pipe(
      tap(() => {
        console.log('Event');
      }),
      mergeMap(() => {
        return this.cardApiService.randomCardId();
      }),
      tap((randomId) => {
        console.log(`Event2 ${randomId}`);
      }),
      mergeMap((randomId: string) => {
        return this.cardApiService.getCardById(randomId);
      }),
      tap((card: Card) => {
        console.log(`Event3 ${card}`);
      })
    );

    // let ss = await this.randomCard$.pipe(take(1)).toPromise();

  }

  getRandomCard() {
    this.subject.next(true);
  }

}
