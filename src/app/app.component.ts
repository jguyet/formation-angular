import { Component, OnInit, NgZone, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './shared/security/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 

    public exempleValue = 1;

    public elementName = '';

    get detectionLogger() {
      console.log('[appComponent] call of ChangeDetection');
      return '';
    }

    constructor(public router: Router) {

    }

    forceDetection() {
      if (this.exempleValue == 3) {
        this.elementName = 'INPUT VALUE PUSHED';
      }
      this.exempleValue += 1;
    }

}
