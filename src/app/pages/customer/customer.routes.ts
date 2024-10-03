import { Routes } from "@angular/router";
import { CustomerLayoutComponent } from "./customer-layout/customer-layout.component";


export const CUSTOMER_ROUTES: Routes = [
    { path: '',component: CustomerLayoutComponent,children : [
        // { path: 'new-sondaje', component: CargarSondajeComponent },
    ] }
]