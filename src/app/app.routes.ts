import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'home',
        loadComponent: () => import('./pages/home/home').then(m => m.Home),
    },
    {
        path: 'mfea',
        loadChildren: () => loadRemoteModule('mfe-a', './RoutesA').then((m) => m.routes),
    },
    {
        path: 'mfeb',
        loadChildren: () => loadRemoteModule('mfe-b', './RoutesB').then((m) => m.routes),
    },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];
