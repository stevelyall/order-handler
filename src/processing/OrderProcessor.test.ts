import { OrderBuilder } from "../domain/OrderBuilder";
import { OrderCountry, OrderStatus, OrderType } from "../domain/enums";
import OrderProcessor from "./OrderProcessor";

describe("OrderProcessor", () => {
  let orderProcessor: OrderProcessor;

  beforeEach(() => {
    orderProcessor = new OrderProcessor();
  });

  describe("processOrder()", () => {

    it("transitions order state to PROCESSED", () => {
      const order = new OrderBuilder()
        .type(OrderType.EXPRESS)
        .baseCost(100)
        .customerId(123)
        .productId(456)
        .isOnSale(true)
        .orderDate(new Date("2024-03-08T20:48:41.275Z"))
        .address("999 Canada Place")
        .city("Vancouver")
        .stateProvince("BC")
        .zipPostalCode("V6C 3E1")
        .country(OrderCountry.CA)
        .build();

      const result = orderProcessor.processOrder(order);

      expect(result.status).toBe(OrderStatus.PROCESSED);
    });

    // TODO test other things that happen when an order is processed
  });
});
