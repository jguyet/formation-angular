import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  arriveDansLeFuture: Promise<string[]>;

  constructor() {
    this.arriveDansLeFuture = new Promise((resolve) => {
      resolve(['element1', 'element2', 'element3']);
    });
  }

  ngOnInit() {
  }

}
