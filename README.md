# Parcel Tracking App

**Tracking** is the process of gathering and management of information related
to the current location of products or delivery items.

Effective tracking doesn't just improve customer satisfaction; it also empowers
companies with precise Estimated Time of Arrival (**ETA**), ultimately elevating
the overall quality of the service.

The objective of this app is to provide information to the customers about their
packages status across all the delivery process from its order placement until
its arrival to its destiny.

Nowadays, parcels carry bars or QR codes can hold much more information than a
simple package number. The software can record:

- The history of where the parcel has been.
- Its content.
- Weight.
- Dimensions.
- Recipient and destination.
- Required certifications.

Every time the parcel changes hands, an employee from the
delivery company can use a barcode scanner to scan the
package history in the system.

Companies can then make this information accessible to their
customers, who can then track packages as they reach another
destiny. The item will be scanned and updated when it is:

- Loaded for delivery.
- Leaves the courier agency.
- Received by a new agency.
- Sent out for delivery again.

Finally, it arrives at the recipient's location, and the
parcel is scanned for the last time.

## Different types of Delivery Status

| Delivery status | Description |
| --------------- | ----------- |
| Order placed | After successfully completing checkout, the order is registered in the merchant's system, marking the start of the post-purchase journey. |
| Order confirmed | The merchant verifies receipt of payment and confirms that the order is legit. |
| Order processing | The order is being readied for shipment, potentially involving product picking, packing, and labeling. |
| Shipped/Dispatched | The delivery service now has the order, and customers usually receive a tracking number. |
| In transit | The package is moving between locations or on its way to the recipient, typically taking the most time during long-distance shipments. |
| Out for delivery | The order is on its last leg of the journey, expected to be delivered shortly. |
| Delivered | The customer's address has successfully received the package. |
| Attempted delivery | A courier tried delivering the order, but some issue prevented its completion. |
| Canceled | Due to reasons like stock issues or payment problems, the order doesn’t go through. |
| Held at customs | For international orders, customs might inspect or await clearance for the package. |
| Awaiting pickup | Customers can collect their ready at the retailer or courier pickup location. |
| Delayed | External factors like weather or operational challenges have postponed the delivery. |
| Lost | The delivery network can't locate the package.|

## Project setup

### Compile and run the project

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

### Run tests

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

### Stay in touch

- Author - [OsomCo](mailto:hello@osomco.com)
- Website - [https://osomco.com](https://osomco.com/)
- Twitter - [@osomco](https://twitter.com/osomco)
