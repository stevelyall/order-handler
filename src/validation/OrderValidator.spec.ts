import Order from "../domain/Order";
import { OrderCountry, OrderType } from "../domain/enums";
import ValidationResult from "./ValidationResult";
import { OrderValidator } from "./OrderValidator";
import { OrderBuilder } from "../domain/OrderBuilder";

describe("OrderValidator", () => {
  let orderValidator: OrderValidator;
  let orderBuilder: OrderBuilder;

  describe("for Canadian orders", () => {
    beforeEach(() => {
      orderValidator = new OrderValidator(OrderCountry.CA);

      orderBuilder = new OrderBuilder()
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
        .country(OrderCountry.CA);
    });

    it("should return a valid result for a valid order", () => {
      const order: Order = orderBuilder.build();

      const result: ValidationResult = orderValidator.validateOrder(order);

      expect(result.isValid).toBe(true);
      expect(result.message).toBe(undefined);
    });

    it("should return an invalid result for an order with an invalid postal code", () => {
      const order: Order = orderBuilder.zipPostalCode("1234").build();

      const result: ValidationResult = orderValidator.validateOrder(order);

      expect(result.isValid).toBe(false);
    });
  });

  describe("for US orders", () => {
    beforeEach(() => {
      orderValidator = new OrderValidator(OrderCountry.US);
      orderBuilder = new OrderBuilder()
        .type(OrderType.EXPRESS)
        .baseCost(100)
        .customerId(123)
        .productId(456)
        .isOnSale(true)
        .orderDate(new Date("2024-03-08T20:48:41.275Z"))
        .address("1600 Pennsylvania Avenue")
        .city("Washington")
        .stateProvince("DC")
        .zipPostalCode("20500")
        .country(OrderCountry.US);
    });

    it("should return a valid result for a valid order", () => {
      const order: Order = orderBuilder.build();

      const result: ValidationResult = orderValidator.validateOrder(order);

      expect(result.isValid).toBe(true);
    });

    it("should return an invalid result for an order with an invalid zip code", () => {
      const order: Order = orderBuilder.zipPostalCode("ABC").build();

      const result: ValidationResult = orderValidator.validateOrder(order);

      expect(result.isValid).toBe(false);
    });
  });

  // TODO test other validation on an order
});
