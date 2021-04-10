import { TaxScheme } from './TaxScheme';
import { TaxExemptionReasonCode } from './TaxExemptionReasonCode';
import { TaxCategoryId } from './TaxCategoryId';
export declare class TaxCategory {
    id?: TaxCategoryId;
    percent?: string;
    taxExemptionReasonCode?: TaxExemptionReasonCode;
    tierRange?: string;
    taxScheme?: TaxScheme;
    constructor(tc: TaxCategory);
}
