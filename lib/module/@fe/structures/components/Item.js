var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { XMLElement, XMLChild } from 'xml-serializer-ts';
import { prefix } from '@fe/common/constants';
import { CommodityClassification } from './CommodityClassification';
const { CAC, CBC } = prefix;
let SellersItemIdentification = class SellersItemIdentification {
    constructor(sii) {
        this.id = sii.id;
    }
};
__decorate([
    XMLChild({ namespace: CBC, name: 'ID' }),
    __metadata("design:type", String)
], SellersItemIdentification.prototype, "id", void 0);
SellersItemIdentification = __decorate([
    XMLElement({ root: CAC }),
    __metadata("design:paramtypes", [SellersItemIdentification])
], SellersItemIdentification);
export { SellersItemIdentification };
let AdditionalItemIdentification = class AdditionalItemIdentification {
    constructor(aii) {
        this.id = aii.id;
    }
};
__decorate([
    XMLChild({ namespace: CBC, name: 'ID' }),
    __metadata("design:type", String)
], AdditionalItemIdentification.prototype, "id", void 0);
AdditionalItemIdentification = __decorate([
    XMLElement({ root: CAC }),
    __metadata("design:paramtypes", [AdditionalItemIdentification])
], AdditionalItemIdentification);
export { AdditionalItemIdentification };
let Item = class Item {
    constructor(item) {
        this.description = item.description;
        this.sellersItemIdentification = item.sellersItemIdentification;
        this.commodityClassification = item.commodityClassification;
        this.additionalItemIdentification = item.additionalItemIdentification;
    }
};
__decorate([
    XMLChild({ namespace: CBC, name: 'Description' }),
    __metadata("design:type", String)
], Item.prototype, "description", void 0);
__decorate([
    XMLChild({ namespace: CAC, name: 'SellersItemIdentification' }),
    __metadata("design:type", SellersItemIdentification)
], Item.prototype, "sellersItemIdentification", void 0);
__decorate([
    XMLChild({ namespace: CAC, name: 'CommodityClassification' }),
    __metadata("design:type", CommodityClassification)
], Item.prototype, "commodityClassification", void 0);
__decorate([
    XMLChild({ namespace: CAC, name: 'AdditionalItemIdentification' }),
    __metadata("design:type", AdditionalItemIdentification)
], Item.prototype, "additionalItemIdentification", void 0);
Item = __decorate([
    XMLElement({ root: CAC }),
    __metadata("design:paramtypes", [Item])
], Item);
export { Item };
//# sourceMappingURL=Item.js.map