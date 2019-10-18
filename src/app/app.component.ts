import { Component, ChangeDetectorRef } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public toto: string           = 'build';
  public production: boolean   = environment.production;
  public currentNumber: number = 50;

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  /** function called after emit on example component */
  public computeFunction(event) {
    console.log('ComputeEvent:', event);

    /** After 1000ms increase currentNumber by 1 and force detect changes */
    const parent = this;
    setTimeout(() => {
        console.log(parent.currentNumber);
        parent.currentNumber += 1;
        parent.changeDetectorRef.detectChanges();
    }, 1000);
  }

}
