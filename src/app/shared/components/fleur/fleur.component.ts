import { Component, OnInit, ElementRef, ContentChild, AfterContentInit, ViewChild, AfterViewInit, ChangeDetectionStrategy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-fleur',
  templateUrl: './fleur.component.html',
  styleUrls: ['./fleur.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FleurComponent implements OnInit, AfterContentInit {

  @ContentChild('fleurId', {static: false}) public configElement: ElementRef;

  public src$: BehaviorSubject<string> = new BehaviorSubject<string>('1');

  // get value() {
  //   console.log('detection called');
  //   return 'X';
  // }

  public value2 = 0;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.src$.next(this.configElement.nativeElement.innerHTML);
  }

}
