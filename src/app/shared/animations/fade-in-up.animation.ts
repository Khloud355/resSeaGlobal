import { trigger, transition, style, animate } from '@angular/animations';

export const fadeInUp = trigger('fadeInUp', [
  transition(':enter', [
    style({
      opacity: 0,
      transform: 'translateY(100vh)',
    }),
    animate(
      '2s cubic-bezier(0.22, 1, 0.36, 1)',
      style({
        opacity: 1,
        transform: 'translateY(0)',
      })
    ),
  ]),
]);
