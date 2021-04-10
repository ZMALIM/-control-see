import { PayableAmount } from './PayableAmount';
export declare class LegalMonetaryTotal {
    lineExtensionAmount?: PayableAmount;
    taxInclusiveAmount?: PayableAmount;
    allowanceTotalAmount?: PayableAmount;
    chargeTotalAmount?: PayableAmount;
    prepaidAmount?: PayableAmount;
    payableAmount?: PayableAmount;
    constructor(lmt: LegalMonetaryTotal);
}
