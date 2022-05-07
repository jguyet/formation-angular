import { Component, OnInit } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { Card } from 'src/app/shared/models/card';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.css']
})
export class BadgeComponent implements OnInit {
  notificationCount = 5;
  enable: boolean = false;

  constructor() {

  }

  ngOnInit() {

  }

  f() {
  }

}
