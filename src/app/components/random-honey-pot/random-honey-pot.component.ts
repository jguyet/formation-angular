import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { Card } from 'src/app/shared/models/card';
import { CardApiService } from 'src/app/shared/services/card-api.service';

@Component({
  selector: 'app-random-honey-pot',
  templateUrl: './random-honey-pot.component.html',
  styleUrls: ['./random-honey-pot.component.css']
})
export class RandomHoneyPotComponent implements OnInit, OnDestroy {

  public card$: Observable<Card>;

  private monProgram: Subject<boolean> = new Subject<boolean>();

  private subscription: Subscription = new Subscription();

  constructor(public cardApiService: CardApiService) { }

  ngOnInit(): void {
    this.card$ = this.monProgram.pipe(
      mergeMap(() => this.cardApiService.getRandomCardId()),
      mergeMap((randomCardId) => this.cardApiService.getCardById(randomCardId))
    );
    this.subscription.add(this.card$.subscribe());
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  random(): void {
    this.monProgram.next(false);
  }

}
