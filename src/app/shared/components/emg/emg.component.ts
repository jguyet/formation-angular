import { Component, OnInit, ContentChild, ElementRef, AfterContentInit, Input } from '@angular/core';

@Component({
  selector: 'emg',
  templateUrl: './emg.component.html',
  styleUrls: ['./emg.component.css']
})
export class EmgComponent implements OnInit, AfterContentInit {

  @ContentChild('src', { static: false }) src: ElementRef;

  public srcImg: string;

  constructor() {
    console.log('Constructor:', this.src);
  }

  ngOnInit() {
    console.log('ngOnInit:', this.src);
  }

  ngAfterContentInit() {
    this.srcImg = `/assets/img/${this.src.nativeElement.innerText}`;
    console.log('ngAfterContentInit:', this.src.nativeElement.innerText);
  }

}
