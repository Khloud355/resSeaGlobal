import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  navItems = [
    { label: 'Extractor', route: '/extractor' },
    { label: 'RSG Dashboard', route: '/dashboard' },
    { label: 'RSG Analysis', route: '/rsg-analysis' },
    { label: 'HBU Analysis', route: '/hbu' },
    { label: 'Virtual Advisor', route: '/advisor' },
    { label: 'Repository', route: '/repository' },
  ];
}
