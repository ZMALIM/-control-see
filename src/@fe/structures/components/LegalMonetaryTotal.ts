import { XMLElement, XMLChild } from 'xml-serializer-ts';
import { prefix } from '@fe/common/constants';
import { PayableAmount } from './PayableAmount';

const { CAC, CBC } = prefix;

@XMLElement({ root: CAC })
export class LegalMonetaryTotal 
{
    @XMLChild({ namespace: CBC, name: 'LineExtensionAmount' })
    public lineExtensionAmount?: PayableAmount;

    @XMLChild({ namespace: CBC, name: 'TaxInclusiveAmount' })
    public taxInclusiveAmount?: PayableAmount;

    @XMLChild({ namespace: CBC, name: 'AllowanceTotalAmount' })
    public allowanceTotalAmount?: PayableAmount;

    @XMLChild({ namespace: CBC, name: 'ChargeTotalAmount' })
    public chargeTotalAmount?: PayableAmount;

    @XMLChild({ namespace: CBC, name: 'PrepaidAmount' })
    public prepaidAmount?: PayableAmount;

    @XMLChild({ namespace: CBC, name: 'PayableAmount' })
    public payableAmount?: PayableAmount;

    constructor(lmt: LegalMonetaryTotal) 
    {
        this.lineExtensionAmount = lmt.lineExtensionAmount;
        this.taxInclusiveAmount = lmt.taxInclusiveAmount;
        this.payableAmount = lmt.payableAmount;
        this.allowanceTotalAmount = lmt.allowanceTotalAmount;
        this.chargeTotalAmount = lmt.chargeTotalAmount;
        this.prepaidAmount = lmt.prepaidAmount;
    }
}
