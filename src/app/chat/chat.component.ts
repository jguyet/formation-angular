import { Component, OnInit, Input, OnChanges, SimpleChanges, ChangeDetectionStrategy, ChangeDetectorRef, NgZone } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatComponent implements OnInit, OnChanges {

  @Input('name') name: string;

  public npaw: number = 0;

  public myName: BehaviorSubject<string> = new BehaviorSubject<string>(undefined);

  constructor(public changeDetectorRef: ChangeDetectorRef, public ngZone: NgZone) {
    this.changeDetectorRef.detach();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if (changes['name'] && changes['name'].currentValue !== changes['name'].previousValue) {
      console.log('set name');
      this.myName.next(this.name);
    }
  }

  ngOnInit() {
    this.npaw = 4;
  }

  changeNumberOfPaw(n : number) {
    this.npaw = n;
  }

}
