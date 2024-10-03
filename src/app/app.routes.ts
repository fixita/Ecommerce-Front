import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadChildren: () => import('./pages/customer/customer.routes').then(m => m.CUSTOMER_ROUTES) }
];