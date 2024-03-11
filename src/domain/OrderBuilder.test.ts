import { OrderBuilder } from './OrderBuilder';
import { OrderType, OrderCountry } from './enums';
import Order from './Order';

describe('OrderBuilder', () => {
  let orderBuilder: OrderBuilder;

  beforeEach(() => {
    orderBuilder = new OrderBuilder();
  });

  it('should build an order with the values provided', () => {
    const customerId = 1;
    const productId = 2;
    const isOnSale = true;
    const orderDate = new Date('2021-01-31');
    const shipDate = new Date('2021-02-03');
    const address = '929 King Bridge Drive';
    const city = 'Arlington';
    const stateProvince = 'VA';
    const zipPostalCode = '22202';
    const country = OrderCountry.US;
    const type = OrderType.STANDARD;
    const baseCost = 100;

    const order: Order = orderBuilder
      .customerId(customerId)
      .productId(productId)
      .isOnSale(isOnSale)
      .orderDate(orderDate)
      .shipDate(shipDate)
      .address(address)
      .city(city)
      .stateProvince(stateProvince)
      .zipPostalCode(zipPostalCode)
      .country(country)
      .type(type)
      .baseCost(baseCost)
      .build();

    expect(order.customerId).toBe(customerId);
    expect(order.productId).toBe(productId);
    expect(order.isOnSale).toBe(isOnSale);
    expect(order.orderDate).toBe(orderDate);
    expect(order.shipDate).toBe(shipDate);
    expect(order.address).toBe(address);
    expect(order.city).toBe(city);
    expect(order.stateProvince).toBe(stateProvince);
    expect(order.zipPostalCode).toBe(zipPostalCode);
    expect(order.country).toBe(country);
    expect(order.type).toBe(type);
    expect(order.baseCost).toBe(baseCost);
  });
});
