import { Routes } from '@angular/router';
import { App } from './app';

export const routes: Routes = [
  {path: 'toto', component: App}, // Eager loading - Pour les pages présentes directement, comme une homepage
  {path: 'home', redirectTo: '', pathMatch: 'full'},
  {path: 'continents', loadComponent: () => import('./components/continents-list/continents-list')
    .then((component) => component.ContinentsList) // Lazy loading - charger dynamiquement le composant. Si la route n'est pas activée, le composant n'est pas chargé.
  }
];
