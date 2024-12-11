import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-tp-rxjs',
  imports: [
    CommonModule
  ],
  templateUrl: './tp-rxjs.component.html',
  styleUrl: './tp-rxjs.component.css'
})
export class TpRxjsComponent {
  list$: Observable<number[]> = of([1, 2, 3, 4, 5], [56], [57]);

  constructor() {
    this.list$.subscribe((list) => {
      console.log(list);
    });
  }
}
