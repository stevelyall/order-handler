import Order from "../../domain/Order";
import IOrderValidationStrategy from "./interfaces/IOrderValidationStrategy";
import ValidationResult from "../ValidationResult";

export default class USOrderValidationStrategy implements IOrderValidationStrategy {
  isOrderValid(order: Order): ValidationResult {
      // check zip code format, assumes 5 digit zip format
      const zipCodeMatcher = /^\d{5}$/;
      if (!order.zipPostalCode?.match(zipCodeMatcher)) {
          return { isValid: false, message: 'Invalid US zip code.'};
      }

      // TODO validate other fields

      return { isValid: true }  }

}
