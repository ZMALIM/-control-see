import { InvoicedQuantity } from './InvoicedQuantity';
import { PayableAmount } from './PayableAmount';
import { PricingReference } from './PricingReference';
import { AllowanceCharge } from './AllowanceCharge';
import { TaxTotal } from './TaxTotal';
import { Item } from './Item';
import { Price } from './Price';
export declare class InvoiceLine {
    id: string;
    creditedQuantity?: InvoicedQuantity;
    invoicedQuantity?: InvoicedQuantity;
    debitedQuantity?: InvoicedQuantity;
    lineExtensionAmount?: PayableAmount;
    pricingReference?: PricingReference;
    allowanceCharge?: AllowanceCharge;
    taxTotals?: TaxTotal[];
    item?: Item;
    price?: Price;
    constructor(il: InvoiceLine);
}
