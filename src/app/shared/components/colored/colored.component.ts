import { AfterContentInit, AfterViewInit, Component, ContentChild, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-colored',
  templateUrl: './colored.component.html',
  styleUrls: ['./colored.component.css']
})
export class ColoredComponent implements OnInit, AfterViewInit {

  @ViewChild('color') colorElement: ElementRef;

  public currentColor$: Subject<string> = new Subject();

  constructor() { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    this.currentColor$.next(this.colorElement.nativeElement.innerHTML.trim());
  }

}
