import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardApiService } from './services/card-api.service';
import { HttpClientModule } from '@angular/common/http';
import { UploadService } from './services/upload.service';
import { AuthService } from './security/auth.service';
import { OAuthModule } from 'angular-oauth2-oidc';
import { ApplyColorDirective } from './directives/apply-color.directive';

@NgModule({
  declarations: [ApplyColorDirective],
  imports: [
    CommonModule,
    HttpClientModule,
    OAuthModule.forRoot({
        resourceServer: {
            sendAccessToken: true
        }
    })
  ],
  exports: [ApplyColorDirective],
  providers: [CardApiService, UploadService, AuthService]
})
export class SharedModule { }
