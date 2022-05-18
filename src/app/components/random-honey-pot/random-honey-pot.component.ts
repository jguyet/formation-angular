import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { mergeMap, tap } from 'rxjs/operators';
import { Card } from 'src/app/shared/models/card';
import { CardApiService } from 'src/app/shared/services/card-api.service';

@Component({
  selector: 'app-random-honey-pot',
  templateUrl: './random-honey-pot.component.html',
  styleUrls: ['./random-honey-pot.component.css']
})
export class RandomHoneyPotComponent implements OnInit, AfterViewInit {

  public card$: Observable<Card>;

  private subject: Subject<boolean> = new Subject<boolean>();

  constructor(cardApiService: CardApiService) {
    this.card$ = this.subject.pipe(
      mergeMap(() => {
        return cardApiService.getRandomCardId();
      }),
      mergeMap((randomId: string) => {
        return cardApiService.getCardById(randomId);
      })
    );
  }
  ngAfterViewInit(): void {
    this.random();
  }

  ngOnInit(): void {
  }

  random(): void {
    this.subject.next(true);
  }

}
