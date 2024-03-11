import Order from "../domain/Order";
import { OrderBuilder } from "../domain/OrderBuilder";
import { OrderCountry, OrderType } from "../domain/enums";
import OrderCalculator from "./OrderCalculator";

describe("OrderCalculator", () => {
  let orderCalculator: OrderCalculator;
  let orderBuilder: OrderBuilder;

  beforeEach(() => {
    orderCalculator = new OrderCalculator();

    orderBuilder = new OrderBuilder()
      .customerId(123)
      .productId(456)
      .isOnSale(false)
      .orderDate(new Date("2024-03-08T20:48:41.275Z"))
      .address("999 Canada Place")
      .city("Vancouver")
      .stateProvince("BC")
      .zipPostalCode("V6C 3E1")
      .country(OrderCountry.CA);
  });

  describe("for standard orders", () => {

    beforeEach(() => {
      orderBuilder.baseCost(1000).type(OrderType.STANDARD);
    });

    it("should return the base cost for a standard order", () => {
      const order: Order = orderBuilder.build();

      const cost: number = orderCalculator.calculateCost(order);

      expect(cost).toBe(1000);
    });

    it("should return the discounted price if the order item is on sale", () => {
      const order: Order = orderBuilder.isOnSale(true).build();

      const cost: number = orderCalculator.calculateCost(order);

      expect(cost).toBe(990);
    });
  });

  describe("for express orders", () => {

    beforeEach(() => {
      orderBuilder.baseCost(1000).type(OrderType.EXPRESS);
    });

    it("should return the express surcharge price", () => {
      const order: Order = orderBuilder.build();

      const cost: number = orderCalculator.calculateCost(order);

      expect(cost).toBe(1200);
    });
  });
});
