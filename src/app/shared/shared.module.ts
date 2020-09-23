import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardApiService } from './services/card-api.service';
import { HttpClientModule } from '@angular/common/http';
import { UploadService } from './services/upload.service';
import { AuthService } from './security/auth.service';
import { OAuthModule } from 'angular-oauth2-oidc';
import { DownloadPictureService } from './services/download-picture.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    OAuthModule.forRoot({
        resourceServer: {
            sendAccessToken: true
        }
    })
  ],
  exports: [],
  providers: [CardApiService, UploadService, AuthService, DownloadPictureService]
})
export class SharedModule { }
