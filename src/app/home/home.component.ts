import { Component, OnInit } from '@angular/core';
import { CardApiService } from '../shared/services/card-api.service';
import { ExampleApiService } from '../shared/services/example-api.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Card } from '../shared/models/Card';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    public cards: Observable<Card[]>;

    constructor(public cardApiService: CardApiService) { }

    ngOnInit() {
      this.cards = this.cardApiService.getCards();
    }
}
