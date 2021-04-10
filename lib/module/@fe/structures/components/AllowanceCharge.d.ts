import { PayableAmount } from './PayableAmount';
import { AllowanceChargeReasonCode } from './AllowanceChargeReasonCode';
export declare class AllowanceCharge {
    chargeIndicator?: string;
    allowanceChargeReasonCode?: AllowanceChargeReasonCode;
    multiplierFactorNumeric?: string;
    amount?: PayableAmount;
    baseAmount?: PayableAmount;
    constructor(ac: AllowanceCharge);
}
