import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  openedSection = signal<string | null>('Government Direction');

  menu = [
    { label: 'Analysis', icon: 'Analysis.svg', route: '/analysis' },
    {
      label: 'Objectives & Targets',
      icon: 'ObjectivesTargets.svg',
      route: '/objectives',
    },

    {
      label: 'Government Direction',
      icon: 'GovernmentDirection.svg',
      expandable: true,
      children: [
        { label: 'Vision 2030', route: '/vision' },
        { label: 'Partnerships', route: '/rsg-analysis/partnerships' },
      ],
    },

    {
      label: 'Benchmark',
      icon: 'Benchmark.svg',
      expandable: true,
      children: [
        { label: 'Vision 2030', route: '/vision' },
        { label: 'BenchMark', route: '/rsg-analysis/benchmark' },
      ],
    },

    { label: 'News', icon: 'News.svg', route: '/news' },
    {
      label: 'Social Media Analysis',
      icon: 'SocialMediaAnalysis.svg',
      route: '/social',
    },
    {
      label: 'Initiative Generator',
      icon: 'InitiativeGenerator.svg',
      route: '/initiative',
    },
  ];

  toggleSection(label: string) {
    this.openedSection.set(this.openedSection() === label ? null : label);
  }
  openedArrow = '';

  toggleArrow(label: string) {
    this.openedArrow = this.openedArrow === label ? '' : label;
  }
}
