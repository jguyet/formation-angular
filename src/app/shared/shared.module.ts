import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardApiService } from './services/card-api.service';
import { HttpClientModule } from '@angular/common/http';
import { UploadService } from './services/upload.service';
import { AuthService } from './security/auth.service';
import { OAuthModule } from 'angular-oauth2-oidc';
import { InputErrorPipe } from './pipes/input-error.pipe';
import { ColoredComponent } from './components/colored/colored.component';
import { CardAccordionComponent } from './components/card-accordion/card-accordion.component';
import { CdkAccordionModule } from '@angular/cdk/accordion';

@NgModule({
  declarations: [
    InputErrorPipe,
    ColoredComponent,
    CardAccordionComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    OAuthModule.forRoot({
        resourceServer: {
            sendAccessToken: true
        }
    }),
    CdkAccordionModule
  ],
  exports: [
    InputErrorPipe,
    ColoredComponent,
    CardAccordionComponent
  ],
  providers: [CardApiService, UploadService, AuthService]
})
export class SharedModule { }
