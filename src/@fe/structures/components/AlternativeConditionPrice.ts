import { XMLElement, XMLChild } from 'xml-serializer-ts';
import { prefix } from '@fe/common/constants';
import { PayableAmount } from './PayableAmount';
import { PriceTypeCode } from './PriceTypeCode';
const { CAC, CBC } = prefix;

@XMLElement({ root: CAC })
export class AlternativeConditionPrice 
{
    @XMLChild({ namespace: CBC, name: 'PriceAmount' })
    public priceAmount?: PayableAmount;

    @XMLChild({ namespace: CBC, name: 'PriceTypeCode' })
    public priceTypeCode?: PriceTypeCode;

    constructor(acp: AlternativeConditionPrice) 
    {
        this.priceAmount = acp.priceAmount;
        this.priceTypeCode = acp.priceTypeCode;
    }
}
