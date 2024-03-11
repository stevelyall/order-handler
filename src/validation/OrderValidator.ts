import Order from "../domain/Order";
import { OrderCountry } from "../domain/enums";
import {
  CAOrderValidationStrategy,
  UKOrderValidationStrategy,
  USOrderValidationStrategy,
  IOrderValidationStrategy
} from "./strategies"
import ValidationResult from "./ValidationResult";

export class OrderValidator {
  private _orderValidationStrategy: IOrderValidationStrategy;

  constructor(country: OrderCountry) {
      switch (country) {
          case OrderCountry.US:
              this._orderValidationStrategy = new USOrderValidationStrategy();
              break;
          case OrderCountry.UK:
              this._orderValidationStrategy = new UKOrderValidationStrategy();
              break;
          case OrderCountry.CA:
              this._orderValidationStrategy = new CAOrderValidationStrategy();
              break;
          default:
              throw new Error('Unsupported country.');
      }
  }

  validateOrder(order: Order): ValidationResult {
      return this._orderValidationStrategy.isOrderValid(order);
  }

}
