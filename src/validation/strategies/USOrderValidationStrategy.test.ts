import USOrderValidationStrategy from "./USOrderValidationStrategy";
import { OrderBuilder } from "../../domain/OrderBuilder";

describe("USOrderValidationStrategy", () => {
  let strategy: USOrderValidationStrategy;

  const ERROR_MSG = "Invalid US zip code.";

  beforeEach(() => {
    strategy = new USOrderValidationStrategy();
  });

  it("should return true for a valid zip code", () => {
    const order = new OrderBuilder()
    .zipPostalCode("12345")

      .build();

    const result = strategy.isOrderValid(order);

    expect(result.isValid).toBe(true);
  });

  it("should return false for an invalid zip code with too many characters", () => {
    const order = new OrderBuilder()
    .zipPostalCode("123456")
    .build();

    const result = strategy.isOrderValid(order);

    expect(result.isValid).toBe(false);
    expect(result.message).toBe(ERROR_MSG);
  });

  it("should return false for an invalid zip code with not enough characters", () => {
    const order = new OrderBuilder()
    .zipPostalCode("1234")
    .build();

    const result = strategy.isOrderValid(order);

    expect(result.isValid).toBe(false);
    expect(result.message).toBe(ERROR_MSG);
  });

  it("should return false for an invalid zip code", () => {
    const order = new OrderBuilder()
    .zipPostalCode("V6E 3L2")
    .build();

    const result = strategy.isOrderValid(order);

    expect(result.isValid).toBe(false);
    expect(result.message).toBe(ERROR_MSG);
  });


});
