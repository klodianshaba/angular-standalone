import {Component, computed, signal, Signal, WritableSignal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ordersDataSource} from "../../data-sources/orders-data-source";
import {OrderModel} from "../../models/order-model";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {
  x: WritableSignal<number>;
  y: WritableSignal<number>;
  z: Signal<number>;
  orders: OrderModel[] = ordersDataSource;
  constructor() {
    this.x = signal(5);
    this.y = signal(3);
    this.z = computed(() => this.x() + this.y());
  }
  onChangeMultiplyValue(): void {
    this.x.set(10);
    this.y.set(5);
  }
}
