import { XMLElement, XMLChild } from 'xml-serializer-ts';
import { prefix } from '@fe/common/constants';
import { CommodityClassification } from './CommodityClassification';

const { CAC, CBC } = prefix;

// tslint:disable-next-line: max-classes-per-file
@XMLElement({ root: CAC })
export class SellersItemIdentification 
{
    @XMLChild({ namespace: CBC, name: 'ID' })
    public id: string;
    
    constructor(sii: SellersItemIdentification) 
    {
        this.id = sii.id;
    }
}

// tslint:disable-next-line: max-classes-per-file
@XMLElement({ root: CAC })
export class AdditionalItemIdentification 
{
    @XMLChild({ namespace: CBC, name: 'ID' })
    public id: string;
    
    constructor(aii: AdditionalItemIdentification) 
    {
        this.id = aii.id;
    }
}

// tslint:disable-next-line: max-classes-per-file
@XMLElement({ root: CAC })
export class Item 
{
    @XMLChild({ namespace: CBC, name: 'Description' })
    public description?: string;

    @XMLChild({ namespace: CAC, name: 'SellersItemIdentification' })
    public sellersItemIdentification?: SellersItemIdentification;

    @XMLChild({ namespace: CAC, name: 'CommodityClassification' })
    public commodityClassification?: CommodityClassification;

    @XMLChild({ namespace: CAC, name: 'AdditionalItemIdentification' })
    public  additionalItemIdentification?: AdditionalItemIdentification;
    
    constructor(item: Item) 
    {
        this.description = item.description;
        this.sellersItemIdentification = item.sellersItemIdentification;
        this.commodityClassification = item.commodityClassification;
        this.additionalItemIdentification = item.additionalItemIdentification;
    }
}
