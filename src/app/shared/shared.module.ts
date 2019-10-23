import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardApiService } from './services/card-api.service';
import { ExampleApiService } from './services/example-api.service';
import { SquareComponent } from './components/square/square.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [SquareComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [SquareComponent],
  providers: [CardApiService, ExampleApiService]
})
export class SharedModule { }
