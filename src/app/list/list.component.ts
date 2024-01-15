import { Component } from '@angular/core';
import { ItemComponent } from './item/item.component';
import { CommonModule } from '@angular/common';

class Artifact {
  constructor(public id: number,
    public name: string) {}
}

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ItemComponent, CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  artifacts: Array<Artifact> = [
    new Artifact(1, 'Ring'),
    new Artifact(2, 'Nasgul')
  ];

  whenRemoveArtifact(id: number) {
    this.artifacts = this.artifacts.filter(x => x.id != id);
  }

  track(artifact: any) {
    return artifact.id;
  }

}
