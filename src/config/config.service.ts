import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class ConfigService {

    checkNoResult<T>(item: T, id?:string): void {
        if ( !item || item === null || item === undefined ) {
            this.throwNotFoundException(`Item with ID: ${id} doesn't exist.`);
        }
    }

    throwNotFoundException(error): void {
        throw new HttpException('Entity not found', HttpStatus.NOT_FOUND, {
            cause: error
        });
    }

    assertString (data: Record<string, string>, key: string): void {
        if (!data[key]) {
          throw new Error(`${key} is empty.`);
        }
      };

    /* export enum DeliveryStatus {
        Shipped = "Shipped", // The delivery service has the package and customer has been given a tracking number.
        InTransit = "In transit", // The parcel is on its way to the recipient.
        OutForDelivery = "Out for delivery", // On the last phase. The order is expected to be delivered shortly.
        Delivered = "Delivered", // The package is received successfully.
        AttemptedDelivery = "Attempted delivery", // Some issues prevented the delivering process.
        Canceled = "Canceled", // Due to reasons like stock issues or payment problems.
        HeldAtCustoms = "Held at customs", // Await clearance for the package.
        AwaitingPickup = "Awaiting pickup", // Customer can collect their ready at the courier pickup location.
        Delayed = "Delayed", // External factors have postponed the delivery.
        Lost = "Lost", // The delivery network can't locate the parcel.
    };

    export enum DeliveryStatusMessage {
        Shipped = "The delivery service has the package and customer has been given a tracking number.",
        InTransit = "The parcel is on its way to the recipient.",
        OutForDelivery = "On the last phase. The order is expected to be delivered shortly.",
        Delivered = "The package is received successfully.",
        AttemptedDelivery = "Some issues prevented the delivering process.",
        Canceled = "Due to reasons like stock issues or payment problems.",
        HeldAtCustoms = "Await clearance for the package.",
        AwaitingPickup = "Customer can collect their ready at the courier pickup location.",
        Delayed = "External factors have postponed the delivery.",
        Lost = "The delivery network can't locate the parcel.",
    }; */
}
