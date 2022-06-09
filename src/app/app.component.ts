import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './shared/security/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 

    public state = 'close';

    constructor(public router: Router, public authService: AuthService) {
    }

    setState(state: string) {
      this.state = state;
    }

}
