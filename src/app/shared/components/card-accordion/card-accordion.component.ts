import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../../models/card';

@Component({
  selector: 'app-card-accordion',
  templateUrl: './card-accordion.component.html',
  styleUrls: ['./card-accordion.component.css']
})
export class CardAccordionComponent implements OnInit {

  @Input('cards') cards: Card[];

  constructor() { }

  ngOnInit(): void {
  }

}
