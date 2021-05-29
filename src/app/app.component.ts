import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { JsonPipe } from '@angular/common';
import { AuthService } from './shared/security/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 

    constructor(public router: Router, public jsonPipe: JsonPipe) {
      
    }

}
