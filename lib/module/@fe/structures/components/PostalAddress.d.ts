import { Country } from './Country';
export declare class PostalAddress {
    id?: string;
    streetName?: string;
    citySubdivisionName?: string;
    cityName?: string;
    countrySubentity?: string;
    district?: string;
    country?: Country;
    constructor(pa: PostalAddress);
}
