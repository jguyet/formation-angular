import { Component, OnInit } from '@angular/core';
import { CardApiService } from 'src/app/shared/services/card-api.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  selectedValue: string;
  selectedValue2: string;

  constructor(public cardApiService: CardApiService) { }

  ngOnInit() {
    this.selectedValue = 'angular8';
    this.selectedValue2 = 'angular9';
  }

  getCards() {
    return this.cardApiService.getCards();
  }

}
