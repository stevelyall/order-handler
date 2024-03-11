import Order from './Order';
import { OrderStatus } from './enums';

describe('Order', () => {
  let order: Order;

  beforeEach(() => {
    order = new Order();
  });

  it('should initialize with SUBMITTED status', () => {
    expect(order.status).toBe(OrderStatus.SUBMITTED);
  });

  it('should set the order status to PROCESSED when setProcessed() is called', () => {
    order.setProcessed();
    expect(order.status).toBe(OrderStatus.PROCESSED);
  });

 it('should throw an error when setProcessed() is called if status is not SUBMITTED', () => {
    order.setProcessed();
    order.status = OrderStatus.PROCESSED;
    expect(() => order.setProcessed()).toThrowError('Order state cannot be changed to processed.');
 });

});
