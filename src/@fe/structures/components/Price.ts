import { XMLElement, XMLChild } from 'xml-serializer-ts';
import { prefix } from '@fe/common/constants';
import { PayableAmount } from './PayableAmount';

const { CAC, CBC } = prefix;

@XMLElement({ root: CAC })
export class Price 
{
    @XMLChild({ namespace: CBC, name: 'PriceAmount' })
    public priceAmount: PayableAmount;

    constructor(price: Price) 
    {
        this.priceAmount = price.priceAmount;
    }
}
