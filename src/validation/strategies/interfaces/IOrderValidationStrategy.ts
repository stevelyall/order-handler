import Order from "../../../domain/Order";
import ValidationResult from "../../ValidationResult";

export default interface IOrderValidationStrategy {
    isOrderValid(order: Order): ValidationResult
}
