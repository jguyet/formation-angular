import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from 'src/app/shared/models/card';
import { CardApiService } from 'src/app/shared/services/card-api.service';

@Component({
  selector: 'app-exemple',
  templateUrl: './exemple.component.html',
  styleUrls: ['./exemple.component.css']
})
export class ExempleComponent implements OnInit {

  cards$: Observable<Card[]>;

  constructor(private cardApiService: CardApiService) {
    this.cards$ = this.cardApiService.getCards();
  }

  ngOnInit(): void {
  }

}
