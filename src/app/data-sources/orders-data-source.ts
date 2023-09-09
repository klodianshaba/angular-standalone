import {OrderModel} from "../models/order-model";

export const ordersDataSource: OrderModel[] = [
  {
    id: 1, code: '000001', clientId: 1, clientName: 'John Smith', address: 'New York, USA', insertDate: new Date().toISOString(),
    details: [
      {id: 1, productId: 1, productName: 'Iphone 14 Pro Max', quantity: 2, price: 1400, currencyId: 1, currencySymbol: '$'},
      {id: 2, productId: 2, productName: 'Samsung s23 Ultra', quantity: 1, price: 1200, currencyId: 2, currencySymbol: '€'},
    ]
  },
  {
    id: 2, code: '000002', clientId: 2, clientName: 'Rossy Maxy', address: 'London, UK', insertDate: new Date().toISOString(),
    details: [
      {id: 3, productId: 1, productName: 'Iphone 14 Pro Max', quantity: 1, price: 1400, currencyId: 1, currencySymbol: '$'},
      {id: 4, productId: 2, productName: 'Samsung s23 Ultra', quantity: 3, price: 1200, currencyId: 2, currencySymbol: '€'},
    ]
  },
]
