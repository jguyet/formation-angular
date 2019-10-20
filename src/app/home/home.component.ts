import { Component, ViewEncapsulation } from '@angular/core';
import { Card } from '../shared/models/Card';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent {

    public title = 'Botick';
    public version = '1.0';

    public cards = [
        new Card(
            '1',
            'Miel bleu',
            '',
            10,
            'blue'
        ),
        new Card(
            '2',
            'Miel rouge',
            '',
            10,
            'red'
        ),
        new Card(
            '3',
            'Miel bleu',
            '',
            10,
            'blue'
        ),
        new Card(
            '4',
            'Miel rouge',
            '',
            10,
            'red'
        ),
        new Card(
            '5',
            'Miel bleu',
            '',
            10,
            'blue'
        ),
        new Card(
            '6',
            'Miel rouge',
            '',
            10,
            'red'
        )
    ]

    constructor() { }

}
