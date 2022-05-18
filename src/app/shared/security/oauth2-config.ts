import { AuthConfig } from 'angular-oauth2-oidc';
import { environment } from 'src/environments/environment';

export const oauth2Config: AuthConfig = {

  // Url provide du server d'authentification
  issuer: environment.formationApi,

  // URL de redirection vers notre Single Page Application
  redirectUri: window.location.origin + '/login',

  // nom de notre application
  clientId: 'spa-formation-angular',

  // permissions demander au server d'authentification
  scope: 'openid profile email voucher',

  requireHttps: false
};
