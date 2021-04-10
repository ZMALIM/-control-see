"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = exports.AdditionalItemIdentification = exports.SellersItemIdentification = void 0;
const xml_serializer_ts_1 = require("xml-serializer-ts");
const constants_1 = require("@fe/common/constants");
const CommodityClassification_1 = require("./CommodityClassification");
const { CAC, CBC } = constants_1.prefix;
let SellersItemIdentification = class SellersItemIdentification {
    constructor(sii) {
        this.id = sii.id;
    }
};
__decorate([
    xml_serializer_ts_1.XMLChild({ namespace: CBC, name: 'ID' }),
    __metadata("design:type", String)
], SellersItemIdentification.prototype, "id", void 0);
SellersItemIdentification = __decorate([
    xml_serializer_ts_1.XMLElement({ root: CAC }),
    __metadata("design:paramtypes", [SellersItemIdentification])
], SellersItemIdentification);
exports.SellersItemIdentification = SellersItemIdentification;
let AdditionalItemIdentification = class AdditionalItemIdentification {
    constructor(aii) {
        this.id = aii.id;
    }
};
__decorate([
    xml_serializer_ts_1.XMLChild({ namespace: CBC, name: 'ID' }),
    __metadata("design:type", String)
], AdditionalItemIdentification.prototype, "id", void 0);
AdditionalItemIdentification = __decorate([
    xml_serializer_ts_1.XMLElement({ root: CAC }),
    __metadata("design:paramtypes", [AdditionalItemIdentification])
], AdditionalItemIdentification);
exports.AdditionalItemIdentification = AdditionalItemIdentification;
let Item = class Item {
    constructor(item) {
        this.description = item.description;
        this.sellersItemIdentification = item.sellersItemIdentification;
        this.commodityClassification = item.commodityClassification;
        this.additionalItemIdentification = item.additionalItemIdentification;
    }
};
__decorate([
    xml_serializer_ts_1.XMLChild({ namespace: CBC, name: 'Description' }),
    __metadata("design:type", String)
], Item.prototype, "description", void 0);
__decorate([
    xml_serializer_ts_1.XMLChild({ namespace: CAC, name: 'SellersItemIdentification' }),
    __metadata("design:type", SellersItemIdentification)
], Item.prototype, "sellersItemIdentification", void 0);
__decorate([
    xml_serializer_ts_1.XMLChild({ namespace: CAC, name: 'CommodityClassification' }),
    __metadata("design:type", CommodityClassification_1.CommodityClassification)
], Item.prototype, "commodityClassification", void 0);
__decorate([
    xml_serializer_ts_1.XMLChild({ namespace: CAC, name: 'AdditionalItemIdentification' }),
    __metadata("design:type", AdditionalItemIdentification)
], Item.prototype, "additionalItemIdentification", void 0);
Item = __decorate([
    xml_serializer_ts_1.XMLElement({ root: CAC }),
    __metadata("design:paramtypes", [Item])
], Item);
exports.Item = Item;
//# sourceMappingURL=Item.js.map