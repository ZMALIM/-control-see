import { XMLElement, XMLChild, XMLAttribute } from 'xml-serializer-ts';
import { prefix } from '@fe/common/constants';
import { PayableAmount } from './PayableAmount';

const { CAC, CBC} = prefix;

@XMLElement({ root: CAC})
export class PrepaidPayment 
{
    @XMLChild({ namespace: CBC, name: 'ID' })
    public id?: string;

    @XMLChild({ namespace: CBC, name: 'PaidAmount' })
    public paidAmount?: PayableAmount;

    @XMLChild({ namespace: CBC, name: 'PaidDate' })
    public paidDate?: string;

    @XMLChild({ namespace: CBC, name: 'PaidTime' })
    public paidTime?: string;

    constructor(pp: PrepaidPayment) 
    {
        this.id = pp.id;
        this.paidAmount = pp.paidAmount;
        this.paidDate = pp.paidDate;
        this.paidTime = pp.paidTime;
    }

}
