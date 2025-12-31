import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-partnership-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './partnership-card.component.html',
  styleUrl: './partnership-card.component.scss',
})
export class PartnershipCardComponent {
  card = input.required<{
    id: number;
    name: string;
    description: string;
    image: string;
    index: string;
  }>();
  clicked = output<number>();
  constructor() {}

  onClick() {
    this.clicked.emit(this.card().id);
  }
}
