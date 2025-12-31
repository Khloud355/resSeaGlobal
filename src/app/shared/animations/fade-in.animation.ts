import { trigger, transition, style, animate } from '@angular/animations';

export const fadeInDelay = trigger('fadeInDelay', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('2s 1s ease-in-out', style({ opacity: 1 })),
  ]),
]);
