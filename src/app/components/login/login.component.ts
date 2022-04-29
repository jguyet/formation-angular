import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/security/auth.service';
import { OAuthService } from 'angular-oauth2-oidc';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('logged', [
        state('false', style({
            backgroundColor: 'black',
            color: 'white'
        })),
        state('true', style({
            backgroundColor: 'white',
            color: 'black'
        })),
        transition('false => true', [
            animate('1s')
        ]),
        transition('true => false', [
            animate('0.5s')
        ])
    ])
  ]
})
export class LoginComponent {

    constructor(public authService: AuthService) { }

    public login() {
        this.authService.login();
    }

    public logoff() {
        this.authService.logout();
    }

    public get name() {
        return this.authService.isLogged;
    }

}
