import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  opened2 = true;
  state = 'open';

  setState(state: string) {
    this.state = state;
  }

  constructor() { }

  ngOnInit() {
  }

}
