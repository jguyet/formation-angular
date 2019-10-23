import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardApiService } from './services/card-api.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [CardApiService]
})
export class SharedModule { }
