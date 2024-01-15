import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
  @Input() id: number = 0;
  @Input() name: string = '';

  @Output('remove') removeEvent = new EventEmitter<number>();

  remove() {
    this.removeEvent.emit(this.id);
  }
}
