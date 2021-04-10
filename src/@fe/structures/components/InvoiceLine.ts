import { XMLElement, XMLChild } from 'xml-serializer-ts';
import { prefix } from '@fe/common/constants';
import { InvoicedQuantity } from './InvoicedQuantity';
import { PayableAmount } from './PayableAmount';
import { PricingReference } from './PricingReference';
import { AllowanceCharge } from './AllowanceCharge';
import { TaxTotal } from './TaxTotal';
import { Item } from './Item';
import { Price } from './Price';

const { CAC, CBC } = prefix;

@XMLElement({ root: CAC })
export class InvoiceLine 
{
    @XMLChild({ namespace: CBC, name: 'ID' })
    public id: string;

    @XMLChild({ namespace: CBC, name: 'CreditedQuantity' })
    public creditedQuantity?: InvoicedQuantity;

    @XMLChild({ namespace: CBC, name: 'InvoicedQuantity' })
    public invoicedQuantity?: InvoicedQuantity;

    @XMLChild({ namespace: CBC, name: 'DebitedQuantity' })
    public debitedQuantity?: InvoicedQuantity;

    @XMLChild({ namespace: CBC, name: 'LineExtensionAmount' })
    public lineExtensionAmount?: PayableAmount;

    @XMLChild({ namespace: CAC, name: 'PricingReference' })
    public pricingReference?: PricingReference;

    @XMLChild({ namespace: CAC, name: 'allowanceCharge' })
    public allowanceCharge?: AllowanceCharge;

    @XMLChild({ namespace: CAC, name: 'TaxTotal' })
    public taxTotals?: TaxTotal[];

    @XMLChild({ namespace: CAC, name: 'Item' })
    public item?: Item;

    @XMLChild({ namespace: CAC, name: 'Price' })
    public price?: Price;

    constructor(il: InvoiceLine) {
        this.id = il.id;
        this.creditedQuantity = il.creditedQuantity;
        this.invoicedQuantity = il.invoicedQuantity;
        this.debitedQuantity = il.debitedQuantity;
        this.lineExtensionAmount = il.lineExtensionAmount;
        this.pricingReference = il.pricingReference;
        this.allowanceCharge = il.allowanceCharge;
        this.taxTotals = il.taxTotals;
        this.item = il.item;
        this.price = il.price;
        this.taxTotals = new Array<TaxTotal>();
    }
}
