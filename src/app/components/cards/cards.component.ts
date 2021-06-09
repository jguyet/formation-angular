import { Component, OnInit } from '@angular/core';
import { CardApiService } from 'src/app/shared/services/card-api.service';
import { interval, Observable, of } from 'rxjs';
import { Card } from 'src/app/shared/models/card';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

    public cards$: Observable<Card[]>;

    constructor(private cardApiService: CardApiService) { }

    ngOnInit() {
      this.cards$ = interval(10000)
        .pipe(
          mergeMap(() => {
            return this.cardApiService.getCards();
          })
        );
    }

}
