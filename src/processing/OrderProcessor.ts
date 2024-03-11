import Order from "../domain/Order";

export default class OrderProcessor {

  processOrder(order: Order): Order {
    // Process the order
    console.log("Processing order...");
    // assumes successful processing
    order.setProcessed();
    return order;
  }
}
