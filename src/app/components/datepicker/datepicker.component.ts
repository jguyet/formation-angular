import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {
  minDate = new Date();
  maxDate = new Date(2019, 8, 20); // 20 Sept 2019

  saturdaySundayFilter(date) {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  }

  constructor() { }

  ngOnInit() {
  }

}
