import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardService } from '../shared/services/card.service';
import { Card } from '../shared/models/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

    public card: Promise<Card>;
    private id: string;

    constructor(public route: ActivatedRoute,
                public cardService: CardService) { }

    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');
        this.card = this.cardService.getCard(this.id);
    }

}
