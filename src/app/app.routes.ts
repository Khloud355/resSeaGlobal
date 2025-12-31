import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'rsg-analysis',
    loadComponent: () =>
      import('./layouts/main-layout/components/layout/layout.component').then(
        (m) => m.LayoutComponent
      ),
    children: [
      {
        path: 'partnerships',
        loadChildren: () =>
          import('./features/patnerships/patnerships.module').then(
            (m) => m.PatnershipsModule
          ),
      },
      {
        path: 'benchmark',
        loadChildren: () =>
          import('./features/benchmark/benchmark.module').then(
            (m) => m.BenchmarkModule
          ),
      },

      {
        path: '',
        redirectTo: 'analysis',
        pathMatch: 'full',
      },
    ],
  },
];
