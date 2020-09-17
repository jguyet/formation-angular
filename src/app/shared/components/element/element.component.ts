import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ElementComponent implements OnInit {

  @Input('name') name: string;

  get detectionLogger() {
    console.log('[ElementComponent] call of ChangeDetection');
    return '';
  }

  constructor() { }

  ngOnInit() {
  }

}
