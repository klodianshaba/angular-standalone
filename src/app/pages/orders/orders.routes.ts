import {Routes} from "@angular/router";
import {OrdersComponent} from "./orders.component";

export const routes: Routes = [
  {
    path: '',
    component: OrdersComponent
  },
  {
    path: ':id',
    loadComponent: () => import('../order/order.component').then(mod => mod.OrderComponent)
  }
]
