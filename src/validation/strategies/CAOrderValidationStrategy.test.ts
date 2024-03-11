import CAOrderValidationStrategy from "./CAOrderValidationStrategy";
import { OrderBuilder } from "../../domain/OrderBuilder";

describe("CAOrderValidationStrategy", () => {
  let strategy: CAOrderValidationStrategy;

  const ERROR_MSG = "Invalid Canada postal code.";

  beforeEach(() => {
    strategy = new CAOrderValidationStrategy();
  });

  it("should return true for a valid postal code", () => {
    const order = new OrderBuilder()
      .zipPostalCode("V6E 3L2")
      .build();

    const result = strategy.isOrderValid(order);

    expect(result.isValid).toBe(true);
  });

  it("should return false for an invalid numeric postal code", () => {
    const order = new OrderBuilder()
    .zipPostalCode("12345")
    .build();

    const result = strategy.isOrderValid(order);

    expect(result.isValid).toBe(false);
    expect(result.message).toBe(ERROR_MSG);
  });

  it("should return false for an invalid postal code", () => {
    const order = new OrderBuilder()
    .zipPostalCode("AAA BBB")
    .build();

    const result = strategy.isOrderValid(order);

    expect(result.isValid).toBe(false);
    expect(result.message).toBe(ERROR_MSG);
  });

});
