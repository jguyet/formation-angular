import { Component, OnInit } from '@angular/core';
import { CardApiService } from '../shared/services/card-api.service';
import { ExampleApiService } from '../shared/services/example-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    public title = 'Botick';
    public version = '1.0';
    public cards: Promise<any>;

    constructor(public cardApiService: CardApiService,
      public exampleApiService: ExampleApiService) { }

    ngOnInit() {
      this.cards = this.cardApiService.getCards();
      this.title = this.exampleApiService.examplllllee(false);
    }
}
