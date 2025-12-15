import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { NotFound } from './core/not-found/not-found';

export const routes: Routes = [
  {path: '', component: Home}, // Eager loading - Pour les pages présentes directement, comme une homepage
  {path: 'home', redirectTo: '', pathMatch: 'full'},
  {path: 'continents', loadComponent: () => import('./components/continents-list/continents-list')
    .then((component) => component.ContinentsList) // Lazy loading - charger dynamiquement le composant. Si la route n'est pas activée, le composant n'est pas chargé.
  },
  {path: 'countries', loadComponent: () => import('./components/countries/countries')
    .then((component) => component.Countries),
    title: 'Countries',
    data:{
      countries:[
        {id: 1, name: 'France'},
        {id: 2, name: 'USA'},
        {id: 3, name: 'Germany'},
        {id: 4, name: 'Spain'}
      ]
    },
    children: [
      { path: ':id', loadComponent: () =>
        import('./components/country-details/country-details').then((component) => component.CountryDetails),
      title: 'Country details'}
    ]
  },
  { path: '**', component: NotFound, title: '404 - Not Found'}
];
