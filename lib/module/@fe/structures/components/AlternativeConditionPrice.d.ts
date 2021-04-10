import { PayableAmount } from './PayableAmount';
import { PriceTypeCode } from './PriceTypeCode';
export declare class AlternativeConditionPrice {
    priceAmount?: PayableAmount;
    priceTypeCode?: PriceTypeCode;
    constructor(acp: AlternativeConditionPrice);
}
