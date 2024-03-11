import { OrderType, OrderCountry } from './enums';
import Order from './Order';

export class OrderBuilder {

  private _order: Order;

  constructor() {
      this._order = new Order();
      // consider initializing order status here
  }

  customerId(id: number): OrderBuilder {
      this._order.customerId = id;
      return this;
  }

  productId(id: number): OrderBuilder {
      this._order.productId = id;
      return this;
  }

  isOnSale(isOnSale: boolean): OrderBuilder {
      this._order.isOnSale = isOnSale;
      return this;
  }

  orderDate(date: Date): OrderBuilder {
      this._order.orderDate = date;
      return this;
  }

  shipDate(date: Date): OrderBuilder {
      this._order.shipDate = date;
      return this;
  }

  address(address: string): OrderBuilder {
      this._order.address = address;
      return this;
  }

  city(city: string): OrderBuilder {
      this._order.city = city;
      return this;
  }

  stateProvince(stateProvince: string): OrderBuilder {
      this._order.stateProvince = stateProvince;
      return this;
  }

  zipPostalCode(zipPostalCode: string): OrderBuilder {
      this._order.zipPostalCode = zipPostalCode;
      return this;
  }

  country(country: OrderCountry): OrderBuilder {
      this._order.country = country;
      return this;
  }

  type(type: OrderType): OrderBuilder {
      this._order.type = type;
      return this;
  }

  baseCost(cost: number): OrderBuilder {
      this._order.baseCost = cost;
      return this;
  }

  build(): Order {
      return this._order;
  }
}
