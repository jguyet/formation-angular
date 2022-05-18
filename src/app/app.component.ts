import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { Card } from './shared/models/card';
import { AuthService } from './shared/security/auth.service';
import { myOf } from './shared/utils/myOf';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    constructor(public router: Router) {
    }

}
