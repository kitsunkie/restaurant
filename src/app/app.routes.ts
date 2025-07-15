import { Routes } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { ReservationForm } from './components/reservation-form/reservation-form';
import { Hours } from './components/hours/hours';
import { Arrival } from './components/arrival/arrival';
import { ReservationWindow } from './components/reservation-window/reservation-window';

export const routes: Routes = [
    { 
        path:'',
        redirectTo: 'menu',
        pathMatch: 'full'
    },
    {
        path:"menu",
        component: MenuComponent
    },
    {
        path: "reservation-form",
        component: ReservationForm
    },
    {
        path: "hours",
        component: Hours
    },
    {
        path: "arrival",
        component: Arrival
    },
    {
        path: "reservation",
        component: ReservationWindow
    }

];
