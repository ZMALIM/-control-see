import { PayableAmount } from './PayableAmount';
export declare class AdditionalMonetaryTotal {
    private _id?;
    private _payableAmount?;
    private _referenceAmount?;
    private _totalAmount?;
    private _percent?;
    get id(): string;
    set id(id: string);
    get payableAmount(): PayableAmount;
    set payableAmount(pa: PayableAmount);
    get referenceAmount(): PayableAmount;
    set referenceAmount(ra: PayableAmount);
    get totalAmount(): PayableAmount;
    set totalAmount(ta: PayableAmount);
    get percent(): number;
    set percent(percent: number);
    constructor(amt: AdditionalMonetaryTotal);
}
