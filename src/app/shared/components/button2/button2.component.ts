import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button2',
  imports: [],
  templateUrl: './button2.component.html',
  styleUrl: './button2.component.css'
})
export class Button2Component {

  @Output() eventClick: EventEmitter<boolean> = new EventEmitter();

  click() {
    console.log('[Button2Component] click');
    this.eventClick.emit(true);
  }
}
