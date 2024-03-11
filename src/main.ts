
// Usage

import handleOrder from "./handleOrder";

// Order provided to our module
// Assumes this is the order submitted by the client or consuming service, such as in the body of a request.
const submittedOrder = {
  type: "EXPRESS",
  baseCost: "100",
  customerId: "123",
  productId: "456",
  isOnSale: "true",
  orderDate: "2024-03-08T20:48:41.275Z",
  address: "999 Canada Place",
  city: "Vancouver",
  stateProvince: "BC",
  zipPostalCode: "V6C 3E1",
  country: "Canada",
};

// call our order handler
// Assumes order handling is synchronous, which may not be the case in a real-world application.
try {
  handleOrder(submittedOrder);
  // provide response in success cases.
  // i.e. req.status(200).send('Order processed successfully');
}
catch (e) {
  if (e instanceof Error) {
    console.error(e.message);
  }
  // provide response in error cases.
  // i.e. req.status(4xx).send(e.message);
}
