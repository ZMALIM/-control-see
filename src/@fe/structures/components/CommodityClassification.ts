import { XMLElement, XMLChild} from 'xml-serializer-ts';
import { prefix } from '@fe/common/constants';
import { ItemClassificationCode } from './ItemClassificationCode';

const { CAC, CBC } = prefix;

@XMLElement({ root: CAC })
export class CommodityClassification 
{
    @XMLChild({ namespace: CBC, name: 'ItemClassificationCode' })
    public itemClassificationCode?: ItemClassificationCode;

    constructor(cc: CommodityClassification) 
    {
        this.itemClassificationCode = cc.itemClassificationCode;
    }
}
