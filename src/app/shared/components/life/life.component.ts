import { AfterContentInit, AfterViewInit, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-life',
  templateUrl: './life.component.html',
  styleUrls: ['./life.component.css']
})
export class LifeComponent implements OnInit, OnChanges, OnDestroy, AfterContentInit, AfterViewInit {

  // variables
  @Input() pv: number;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(`on Changes`, changes);
  }
  ngOnDestroy(): void {
    console.log('OnDestroy');
  }
  ngAfterContentInit(): void {
    console.log('AfterContentInit');
  }
  ngAfterViewInit(): void {
    console.log('AfterViewInit');
  }

  ngOnInit(): void {
  }

  // fonctions public

}
