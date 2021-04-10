import { AddressTypeCode } from './AddressTypeCode';
import { AddressLine } from './AddressLine';
import { Country } from './Country';
export declare class RegistrationAddress {
    addressTypeCode?: AddressTypeCode;
    cityName?: string;
    countrySubentity?: string;
    district?: string;
    addressLine?: AddressLine;
    country?: Country;
    constructor(ra: RegistrationAddress);
}
