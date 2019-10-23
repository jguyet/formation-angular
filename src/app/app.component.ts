import { Component, OnInit, OnDestroy } from '@angular/core';
import { environment } from '../environments/environment';
import { of, Observable, Subject, BehaviorSubject, ReplaySubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  public toto: string           = 'build';
  public production: boolean    = environment.production;

  public obs: ReplaySubject<string> = new ReplaySubject<string>();//Observer
  public observable: Observable<string> = this.obs.asObservable();

  constructor() {
  }

  ngOnInit() {
    this.obs.next('salut');
    this.obs.next('bingo');
    
    this.obs.subscribe((value) => {
      console.log(value);
    });
  }

  click() {
    console.log('event ici');
    //effectuer une mise a jour dans notre observer
  }

  ngOnDestroy() {
    this.obs.unsubscribe();/** connexion entre observable et observer coupé */
  }

}
