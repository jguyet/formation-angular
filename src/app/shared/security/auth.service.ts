import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { oauth2Config } from './oauth2-config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    get isLogged() {
        return this.oauthService.hasValidAccessToken();
    }

    constructor(public oauthService: OAuthService) {
        this.setConfiguration();
    }

    public login(additionalState?: string, params?: string | object) {
        this.oauthService.initImplicitFlow(additionalState, params);
    }

    public logout() {
        this.oauthService.logOut();
    }

    public getIdentityClaims() {
        return this.oauthService.getIdentityClaims();
    }

    private setConfiguration() {
        this.oauthService.configure(oauth2Config);
        this.oauthService.oidc = true;
        this.oauthService.setStorage(localStorage);

        // Lancement de la recupération de la configuration oauth2
        this.oauthService.loadDiscoveryDocument(`${oauth2Config.issuer}/.well-known/openid-configuration`).then((e) => {
            // Callback connection implicit
            this.oauthService.tryLoginImplicitFlow().then(e => {
                if (e === true) {
                    console.log('LoginTryingWithSuccess', this.oauthService.getAccessToken());
                }
            }, e => {
                console.log('ErrorTryLoginImplicitFlow', e);
            });
        }, (e) => {
            console.log('ErrorLoadDiscoveryDocument', e);
        });
    }
}
