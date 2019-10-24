import { Component, OnInit, ContentChild, ElementRef, AfterContentInit } from '@angular/core';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit, AfterContentInit {

  @ContentChild(IconComponent, {static: false}) eeeee: IconComponent;

  constructor() { }

  ngOnInit() {

  }

  ngAfterContentInit() {
    console.log('Component of ContentChild: ', this.eeeee);
    // console.log('contentInit: ', this.eeeee.nativeElement.innerText, JSON.parse(this.eeeee.nativeElement.innerText));
  }

}
