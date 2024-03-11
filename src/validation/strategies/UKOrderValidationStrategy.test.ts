import UKOrderValidationStrategy from "./UKOrderValidationStrategy";
import { OrderBuilder } from "../../domain/OrderBuilder";

describe("UKOrderValidationStrategy", () => {
  let strategy: UKOrderValidationStrategy;

  const ERROR_MSG = "Invalid UK post code.";

  beforeEach(() => {
    strategy = new UKOrderValidationStrategy();
  });

  it("should return true for a valid post code", () => {
    const order = new OrderBuilder()
      .zipPostalCode("SW1A 1AA")
      .build();

    const result = strategy.isOrderValid(order);

    expect(result.isValid).toBe(true);
  });

  it("should return false for an invalid post code", () => {
    const order = new OrderBuilder()
    .zipPostalCode("12345")
    .build();

    const result = strategy.isOrderValid(order);

    expect(result.isValid).toBe(false);
    expect(result.message).toBe(ERROR_MSG);
  });

  it("should return false for an invalid post code", () => {
    const order = new OrderBuilder()
    .zipPostalCode("AAA BBB")
    .build();

    const result = strategy.isOrderValid(order);

    expect(result.isValid).toBe(false);
    expect(result.message).toBe(ERROR_MSG);
  });

});
