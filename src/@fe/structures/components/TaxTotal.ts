import { XMLElement, XMLChild } from 'xml-serializer-ts';
import { prefix } from '@fe/common/constants';
import { PayableAmount } from './PayableAmount';
import { TaxSubtotal } from './TaxSubtotal';

const { CAC, CBC } = prefix;

@XMLElement({ root: CAC })
export class TaxTotal 
{
    @XMLChild({ namespace: CBC, name: 'TaxableAmount' })
    public taxableAmount?: PayableAmount;

    @XMLChild({ namespace: CBC, name: 'TaxAmount' })
    public taxAmount?: PayableAmount;

    @XMLChild({ namespace: CAC, name: 'TaxSubtotal' })
    public taxSubtotal?: TaxSubtotal;

    constructor(tt: TaxTotal) 
    {
        this.taxableAmount = tt.taxableAmount;
        this.taxAmount = tt.taxAmount;
        this.taxSubtotal = tt.taxSubtotal;
    }
}
