import { PayableAmount } from './PayableAmount';
import { TaxSubtotal } from './TaxSubtotal';
export declare class TaxTotal {
    taxableAmount?: PayableAmount;
    taxAmount?: PayableAmount;
    taxSubtotal?: TaxSubtotal;
    constructor(tt: TaxTotal);
}
