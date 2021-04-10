import { PayableAmount } from './PayableAmount';
export declare class PrepaidPayment {
    id?: string;
    paidAmount?: PayableAmount;
    paidDate?: string;
    paidTime?: string;
    constructor(pp: PrepaidPayment);
}
