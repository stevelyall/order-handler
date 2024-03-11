import Order from "../../domain/Order";
import IOrderValidationStrategy from "./interfaces/IOrderValidationStrategy";
import ValidationResult from "../ValidationResult";

export default class UKOrderValidationStrategy implements IOrderValidationStrategy {
  isOrderValid(order: Order): ValidationResult {
      // check UK postcode format
      const postCodeMatcher = /^[a-z]{1,2}\d[a-z\d]?\s*\d[a-z]{2}$/i;
      if (!order.zipPostalCode?.match(postCodeMatcher)) {
          return { isValid: false, message: 'Invalid UK post code.' };
      }

      // TODO validate other fields

      return { isValid: true }
  }

}
