import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { InputComponent } from './components/input/input.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  @ViewChild(InputComponent, { static: true }) inputChildComponent: InputComponent; 

  ngAfterViewInit() {
    console.log('ViewChild COMPONENT: ', this.inputChildComponent);
  }
















  constructor(public router: Router) {
    // interval(2000).pipe(take(5), map(x => `${x}`), combineAll()).subscribe(x => {
    //   console.log('salut', x);
    // });

    // const timerOne$: Observable<number> = Observable.create(observer => {
    //     setTimeout(() => {
    //         observer.next(50);
    //         observer.complete();
    //     }, 5000);
    // });
    // const timerTwo$: Observable<number> = Observable.create(observer => {
    //     setTimeout(() => {
    //         observer.next(51);
    //         observer.complete();
    //     }, 6000);
    // });
    // const timerThree$: Observable<number> = Observable.create((observer: Subject<number>) => {
    //     setTimeout(() => {
    //         observer.next(52);
    //         observer.complete();
    //     }, 2000);
    // });

    // //combine multiples asyncs Observables and wait all.
    // combineLatest(timerOne$, timerTwo$, timerThree$).subscribe(
    //   ([timerValOne, timerValTwo, timerValThree]: [number, number, number]) => {

    //     console.log(
    //       `Timer One Latest: ${timerValOne},
    //     Timer Two Latest: ${timerValTwo},
    //     Timer Three Latest: ${timerValThree}`
    //     );
    //   },
    //   () => { },
    //   () => console.log('completed'));
  }
}
