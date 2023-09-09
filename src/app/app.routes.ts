import {Route, Routes} from '@angular/router';

export const routes: Routes = [
  {path: '', loadComponent: () => import('./pages/home/home.component').then(mod => mod.HomeComponent) },
  {path: 'about', loadComponent: () => import('./pages/about/about.component').then(mod => mod.AboutComponent) },
  {path: 'orders', loadChildren: () => import('./pages/orders/orders.routes').then(mod => mod.routes) },
];
