import { XMLElement, XMLChild } from 'xml-serializer-ts';
import { prefix } from '@fe/common/constants';
import { PayableAmount } from './PayableAmount';
import { TaxCategory } from './TaxCategory';

const { CAC, CBC } = prefix;

@XMLElement({ root: CAC })
export class TaxSubtotal 
{
    @XMLChild({ namespace: CBC, name: 'TaxableAmount' })
    public taxableAmount?: PayableAmount;

    @XMLChild({ namespace: CBC, name: 'TaxAmount' })
    public taxAmount?: PayableAmount;

    @XMLChild({ namespace: CAC, name: 'TaxCategory' })
    public taxCategory?: TaxCategory;

    @XMLChild({ namespace: CBC, name: 'Percent' })
    public percent?: number;

    constructor(ts: TaxSubtotal) 
    {
        this.taxableAmount = ts.taxableAmount;
        this.taxAmount = ts.taxAmount;
        this.taxCategory = ts.taxCategory;
        this.percent = ts.percent;
    }
}
