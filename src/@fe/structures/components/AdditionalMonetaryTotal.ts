import { PayableAmount } from './PayableAmount';

export class AdditionalMonetaryTotal 
{
    private _id?: string;
    private _payableAmount?: PayableAmount;
    private _referenceAmount?: PayableAmount;
    private _totalAmount?: PayableAmount;
    private _percent?: number;

    get id(): string 
    {
        return this._id;
    }

    set id(id: string) 
    {
        this._id = id;
    }

    get payableAmount(): PayableAmount 
    {
        return this._payableAmount;
    }

    set payableAmount(pa: PayableAmount) 
    {
        this._payableAmount = pa;
    }

    get referenceAmount(): PayableAmount 
    {
        return this._referenceAmount;
    }

    set referenceAmount(ra: PayableAmount) 
    {
        this._referenceAmount = ra;
    }

    get totalAmount(): PayableAmount 
    {
        return this._totalAmount;
    }

    set totalAmount(ta: PayableAmount) 
    {
        this._totalAmount = ta;
    }

    get percent(): number 
    {
        return this._percent;
    }

    set percent(percent: number) 
    {
        this._percent = percent;
    }

    constructor(amt: AdditionalMonetaryTotal)
    {
        this.id = amt.id;
        this.payableAmount = amt.payableAmount;
        this.referenceAmount = amt.referenceAmount;
        this.totalAmount = amt.totalAmount;
        this.percent = amt.percent;
    }
}
