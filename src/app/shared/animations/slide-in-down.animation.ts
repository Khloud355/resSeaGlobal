import { trigger, transition, style, animate } from '@angular/animations';

export const slideInDown = trigger('slideInDown', [
  transition(':enter', [
    style({
      opacity: 0,
      transform: 'translateY(-20px)',
    }),
    animate(
      '600ms cubic-bezier(0.22, 1, 0.36, 1)',
      style({
        opacity: 1,
        transform: 'translateY(0)',
      })
    ),
  ]),
]);
