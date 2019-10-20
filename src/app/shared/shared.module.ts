import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './components/card/card.component';
import { CustomUppercasePipe } from './pipes/custom-uppercase.pipe';

@NgModule({
  declarations: [CardComponent, CustomUppercasePipe],
  exports: [CardComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
