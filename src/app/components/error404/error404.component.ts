import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-error404',
  templateUrl: './error404.component.html',
  styleUrls: ['./error404.component.css']
})
export class Error404Component implements OnInit, OnChanges {

  @Input() error: string;

  constructor() {
    console.log('Constructeur Error:', this.error);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('NgOnChanges Error:', this.error, changes);
  }

  ngOnInit(): void {
    console.log('NgOnInit Error:', this.error);
  }

}
