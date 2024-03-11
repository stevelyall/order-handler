# Order Handler Module for Hypothetical Order Management System

Example Typescript code that recieves order details from an unknown consumer, then creates, validates, processes and calculates the order.

This is an example of one way to improve upon some basic order handling code, but it doesn't necessarily represent a complete solution. It also isn't the only solution, and still has room for improvement!

It makes a number of naive assumptions about orders and the business logic, which may not represent a real-world application:
 - Orders only have one item and a cost associated with that item
 - Orders aren't handled or processed asynchronously
 - Orders can be standard or express orders
 - Orders can be in the United States, Canada, or United Kingdom
 - Orders are first created, then validated, then processed
 - An order is provided to this service by another service (such as a web client via JSON, or another module)

Many key steps present in many order management systems (like in e-commerce, for example) are missing, such as:
 - Validating addresses and postal/zip codes are correct and exist (such as with Canada Post)
 - Calculating taxes and shipping costs
 - Billing, fulfillment, or a response to the calling service

## Major changes from original code
- Refactored to separate concerns into separate order creation, validation, processing and calculation
- Validations for the order are delegated to a region-specific Strategy to separate zip/postal code validation
- Builder pattern for creating an order added. A future enhancement could further encapsulate order data and control direct access, or enforce particular object state for orders when created
- Moved logic for determining a new date for shipping and checking date formatting to their own separate functions
- Added TS interfaces, enums and classes for key entities/concepts
- Added some error handling
- Added tests

## Getting Started

## Prerequisites
Node `v18.16.0`

## Install dependencies
`npm install`

## Lint
`npm run lint`

## Run tests
`npm test`

## Start the application
`npm start`
