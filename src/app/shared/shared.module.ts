import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardService } from './services/card.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [CardService]
})
export class SharedModule { }
