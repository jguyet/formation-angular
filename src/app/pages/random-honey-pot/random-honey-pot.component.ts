import { Component } from '@angular/core';
import { BehaviorSubject, mergeMap, Observable, tap } from 'rxjs';
import { Card } from '../../shared/models/card';
import { SharedModule } from '../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { CardService } from '../../shared/services/card.service';

@Component({
  selector: 'app-random-honey-pot',
  imports: [
    CommonModule,
    SharedModule
  ],
  templateUrl: './random-honey-pot.component.html',
  styleUrl: './random-honey-pot.component.css'
})
export class RandomHoneyPotComponent {
  
  handleClick$ = new BehaviorSubject<boolean>(true);
  randomHoneyPot$: Observable<Card> = new Observable();

  constructor(public cardService: CardService) {
    this.randomHoneyPot$ = this.handleClick$
      .pipe(
        mergeMap(() => this.cardService.getRandomCard())
      );
  }

  regenerateRandom() {
    this.handleClick$.next(true);
  }
}
