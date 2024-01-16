import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  providers: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  routes: Array<{ name: string, link: string }> = [
    { name: 'Home', link: '' },
    { name: 'Admin', link: 'admin' },
    { name: 'Cycle', link: 'cycle' },
    { name: 'Exemple', link: 'exemple' },
    { name: 'List', link: 'list' },
    { name: 'NewCard', link: 'new-card' }
  ];
}
