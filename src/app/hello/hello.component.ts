import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent {

  @Input('value') inputValue: string;

  @Output('alive') aliveEventEmitter: EventEmitter<string> = new EventEmitter();
  
  public notreclass: boolean = false;
  public value: string = '500';

  public jeclick(event) {
    console.log(this.inputValue);
    console.log(this.value);
    this.notreclass = !this.notreclass;
    this.aliveEventEmitter.emit('im ALIVE !');
  }
}
