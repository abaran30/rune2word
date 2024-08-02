import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'runewords',
    pathMatch: 'full',
  },
  {
    path: 'runewords',
    loadComponent: () =>
      import('./runewords/runewords.page').then(m => m.RunewordsPage),
  },
  {
    path: 'about',
    loadComponent: () => import('./about/about.page').then(m => m.AboutPage),
  },
];
