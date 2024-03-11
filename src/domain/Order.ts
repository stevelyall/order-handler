import { OrderCountry, OrderStatus, OrderType } from './enums';

export default class Order {
  // This class could ensure these fields are private and only accessed through getters (and setters if we want it to be mutable)
  // Product also could be its own class to support multiple products and encapsulate product details, sales, cost, etc
  // ! used since fields are initialized in OrderBuilder.

  customerId!: number;
  productId!: number;
  isOnSale!: boolean;
  orderDate!: Date;
  shipDate!: Date;
  address!: string;
  city!: string;
  stateProvince!: string;
  zipPostalCode!: string;
  country!: OrderCountry;
  type!: OrderType;
  baseCost!: number;
  status: OrderStatus;

  constructor() {
      this.status = OrderStatus.SUBMITTED;
  }
  // assumes order state machine does not allow for direct state changes
  setProcessed(): void {
      if (this.status === OrderStatus.SUBMITTED) {
          this.status = OrderStatus.PROCESSED;
      }
      else {
          throw new Error('Order state cannot be changed to processed.');
      }

  }
}

