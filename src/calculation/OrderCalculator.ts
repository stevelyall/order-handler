import Order from "../domain/Order";
import { OrderType } from "../domain/enums";

export default class OrderCalculator {
  // existing business logic assumes an express order is not eligible for sale discount?
  calculateCost(order: Order): number {
    if (order.type === OrderType.EXPRESS) {
      return order.baseCost * 1.2;
    }

    if (order.isOnSale) {
      return order.baseCost - 10; // assumes always a flat 10 discount
    }

    return order.baseCost;
  }
}
