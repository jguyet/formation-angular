import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/security/auth.service';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
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
