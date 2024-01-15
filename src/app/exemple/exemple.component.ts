import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exemple',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './exemple.component.html',
  styleUrl: './exemple.component.css'
})
export class ExempleComponent {

  title: string = 'Loto';
  billes: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  result: number = 0;
  raffleDetails: string = 'Ready MAN!!!!';

  raffle(event: MouseEvent) {
    console.log('Raffle', event);
    this.result = this.billes[Math.floor(Math.random() * (this.billes.length)) + 1];
  }
}
