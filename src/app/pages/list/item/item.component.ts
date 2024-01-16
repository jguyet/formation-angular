import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { HoverItemDirective } from '../../directives/hover-item.directive';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [HoverItemDirective],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent implements OnChanges {
  @Input() id: number = 0;
  @Input() name: string = '';

  @Output() remove = new EventEmitter<number>();

  // Fonction de hook appelé car j'ai des Input(s) (id, name)
  ngOnChanges(changes: SimpleChanges): void {
    console.log(`On Changes ${this.id}`, changes);
  }

  removeFn() {
    this.remove.emit(this.id);
  }
}
