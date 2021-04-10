import { PayableAmount } from './PayableAmount';
import { TaxCategory } from './TaxCategory';
export declare class TaxSubtotal {
    taxableAmount?: PayableAmount;
    taxAmount?: PayableAmount;
    taxCategory?: TaxCategory;
    percent?: number;
    constructor(ts: TaxSubtotal);
}
