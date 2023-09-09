import {OrderDetailModel} from "./order-detail-model";

export class OrderModel{
  id: number = 0;
  code: string = '';
  clientId: number = 0;
  clientName: string = '';
  address: string = '';
  insertDate: string = '';
  details: OrderDetailModel[] = [];
}
