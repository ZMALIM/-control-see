import { TaxScheme } from './TaxScheme';
import { CompanyID } from './CompanyID';
import { RegistrationAddress } from './RegistrationAddress';
export declare class PartyTaxScheme {
    registrationName?: string;
    companyID?: CompanyID;
    taxScheme?: TaxScheme;
    registrationAddress?: RegistrationAddress;
    constructor(pts: PartyTaxScheme);
}
