import OrderCalculator from "./calculation/OrderCalculator";
import OrderProcessor from "./processing/OrderProcessor";
import { OrderBuilder } from "./domain/OrderBuilder";
import { OrderValidator } from "./validation/OrderValidator";
import getOrderCountryFromString from "./util/getOrderCountryFromString";
import { addThreeDaysToDate } from "./util/dateUtil";

// assumes order fields are present in the submitted order object
export default function handleOrder({
  type,
  baseCost,
  customerId,
  productId,
  isOnSale,
  orderDate,
  address,
  city,
  stateProvince,
  zipPostalCode,
  country,
} ): void {
  // create order
  const orderBuilder = new OrderBuilder()
    .customerId(customerId)
    .productId(productId) // assumes a single product per order
    .isOnSale(isOnSale)
    .type(type)
    .baseCost(baseCost)
    .orderDate(orderDate);

  // assumes ship date is arbitrary, not dependent on other processing or third party services, and determined before processing
  orderBuilder.shipDate(addThreeDaysToDate(orderDate));

  orderBuilder
    .address(address)
    .city(city)
    .stateProvince(stateProvince)
    .zipPostalCode(zipPostalCode);
    // need to make sure zipcode is the same as country (done in validation step)

  // Determine country based on value provided in order object
  const orderCountry = getOrderCountryFromString(country);

  if (orderCountry) {
    orderBuilder.country(orderCountry);
  } else {
    throw new Error("Unsupported country.");
    // Caller should handle this i.e. web service response 400 Bad Request, pass readable message to client
  }

  const order = orderBuilder.build();

  // Validate order, uses strategy for country
  const orderValidator = new OrderValidator(order.country);

  const validationResult = orderValidator.validateOrder(order);
  if (!validationResult.isValid) {
    throw new Error(validationResult.message);
    // Caller should handle this i.e. web service response 400 Bad Request, pass readable validation message to client
  }

  try {
    const orderProcessor = new OrderProcessor();
    orderProcessor.processOrder(order);
  } catch (e) {
    if (e instanceof Error) {
      throw new Error(`Error processing order. ${e.message}`); // ensure processing error message passed to client
    }
    // Caller should handle this error i.e. web service response 500 Internal Server Error, pass readable message to client
  }
  // Process order. Assumption: processing is done before calculation of cost

  // Calculate cost. Assumption: calculating cost is done after the order is validated and processed
  const orderCalculator = new OrderCalculator();

  console.log(orderCalculator.calculateCost(order));
  // or do what needs to be done with the order i.e. saved to db, sent elsewhere, respond to client, etc.
}
