import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit {

  @Input('ninja') value: Observable<string>;

  constructor() { }

  ngOnInit() {
    this.value.subscribe((value) => {
      console.log('depuis l\'enfant :', value);
    });
  }

}
