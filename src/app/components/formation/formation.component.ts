import { Component, OnInit } from '@angular/core';
import { of, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // creation d'observable
    //creatingOfObservable();
  }

  creatingOfObservable() {
    of('toot')
        .pipe(tap(x => console.log('tap : ', x)))
        .subscribe(
            x => console.log('x', x),
            err => console.log('error', err),
            () => console.log('complete'));
    
    new Observable((subscriber) => {
        subscriber.next('toot2');
        subscriber.next('toot22');
        subscriber.complete();
    }).subscribe(
        x => console.log('x2', x),
        err => console.log('error2', err),
        () => console.log('complete2'));
  }

}
