import { Customer, IContactDetails, Address } from "../../customers/entity/customer.entity";

export class Parcel {
    id: string;
    customer: Customer;
    shopName: string; // Delivery company
    shopDetails: IContactDetails;
    courier: string; // Fdex, UPS, ChinaPost,YunExpress, etc...
    deliveryLocation: Address;
    deliveryStatus: string;
    dateSent: Date;
    dateReceived: Date;
    featured?: boolean;
}