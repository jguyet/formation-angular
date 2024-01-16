import { Component } from '@angular/core';
import { ItemComponent } from './item/item.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

class Artifact {
  constructor(public id: number,
    public name: string) {}
}

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ItemComponent, CommonModule, FormsModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  artifacts: Array<Artifact> = [
    new Artifact(1, 'Ring'),
    new Artifact(2, 'Nasgul')
  ];

  newName: string = '';

  whenRemoveArtifact(id: number) {
    this.artifacts = this.artifacts.filter(x => x.id != id);
  }

  addNewArtifact(name: string) {
    this.artifacts.push(new Artifact(this.artifacts.length + 1, name));
  }

  track(artifact: Artifact) {
    console.log('track', artifact);
    return artifact.id;
  }

}
