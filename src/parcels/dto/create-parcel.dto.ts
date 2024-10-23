import { IsBoolean, IsDate, IsString, MinDate } from "class-validator";
import { Customer, IContactDetails, Address } from "../../customers/entity/customer.entity";
import { Transform, Type } from "class-transformer";
export class CreateParcelDto {
    customer: Customer;

    @IsString()
    shopName: string; // Delivery company

    shopDetails: IContactDetails;

    @IsString()
    courier: string; // UPS, ChinaPost,YunExpress, etc...

    deliveryLocation: Address;

    @IsString()
    deliveryStatus: string;

    @Transform( ({ value }) => new Date(value) )
    @IsDate()
    //@MinDate(new Date()) - Checks if the value is a date that's after the specified date.
    dateSent: Date;

    @Transform( ({ value }) => new Date(value) )
    @IsDate()
    //@Type(() => Date)
    dateReceived: Date;

    @IsBoolean()
    featured?: boolean;
}