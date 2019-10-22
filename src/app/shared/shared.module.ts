import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardApiService } from './services/card-api.service';
import { ExampleApiService } from './services/example-api.service';
import { SquareComponent } from './components/square/square.component';



@NgModule({
  declarations: [SquareComponent],
  imports: [
    CommonModule
  ],
  exports: [SquareComponent],
  providers: [CardApiService, ExampleApiService]
})
export class SharedModule { }
