import { trigger, transition, style, animate } from '@angular/animations';

export const slideInRight = trigger('slideInRight', [
  transition(':enter', [
    style({
      opacity: 0,
      transform: 'translateX(100%)',
    }),

    animate(
      '2s 1s cubic-bezier(0.4, 0, 0.2, 1)',
      style({
        opacity: 1,
        transform: 'translateX(0)',
      })
    ),
  ]),
]);
