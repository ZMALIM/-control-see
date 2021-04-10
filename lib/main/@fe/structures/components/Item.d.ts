import { CommodityClassification } from './CommodityClassification';
export declare class SellersItemIdentification {
    id: string;
    constructor(sii: SellersItemIdentification);
}
export declare class AdditionalItemIdentification {
    id: string;
    constructor(aii: AdditionalItemIdentification);
}
export declare class Item {
    description?: string;
    sellersItemIdentification?: SellersItemIdentification;
    commodityClassification?: CommodityClassification;
    additionalItemIdentification?: AdditionalItemIdentification;
    constructor(item: Item);
}
