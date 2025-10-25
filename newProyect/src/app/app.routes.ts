import { Routes } from '@angular/router';
import { Lading } from './modules/lading/lading';
import { Login } from './modules/login/login';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    },

    {
        path: '',
        component: Lading
    },

    {
        path: 'login',
        component: Login
    }
];