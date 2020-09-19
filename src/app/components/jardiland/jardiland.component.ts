import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jardiland',
  templateUrl: './jardiland.component.html',
  styleUrls: ['./jardiland.component.css']
})
export class JardilandComponent implements OnInit {

  public cityName: string = 'unknown';

  constructor() { }

  ngOnInit() {
  }

}
