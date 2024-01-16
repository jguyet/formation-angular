import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FromNowPipePipe } from './pipes/from-now-pipe.pipe';
import { CardService } from './services/card.service';

@NgModule({
  declarations: [
    FromNowPipePipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    FromNowPipePipe
  ],
  providers: [
    CardService
  ]
})
export class SharedModule { }
