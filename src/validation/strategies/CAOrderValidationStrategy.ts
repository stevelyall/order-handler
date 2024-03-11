import Order from "../../domain/Order";
import IOrderValidationStrategy from "./interfaces/IOrderValidationStrategy";
import ValidationResult from "../ValidationResult";

export default class CAOrderValidationStrategy implements IOrderValidationStrategy {
  isOrderValid(order: Order): ValidationResult {

      // check postal code format
      const postalCodeMatcher = /^[ABCEGHJ-NPRSTVXY][0-9][ABCEGHJ-NPRSTV-Z][ ]?[0-9][ABCEGHJ-NPRSTV-Z][0-9]$/;
      if (!order.zipPostalCode?.match(postalCodeMatcher)) {
          return { isValid: false, message: 'Invalid Canada postal code.'};

      }

      // TODO validate other fields

      return { isValid: true }
  }

}
