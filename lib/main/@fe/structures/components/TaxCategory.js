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
exports.TaxCategory = void 0;
const xml_serializer_ts_1 = require("xml-serializer-ts");
const constants_1 = require("@fe/common/constants");
const TaxScheme_1 = require("./TaxScheme");
const TaxExemptionReasonCode_1 = require("./TaxExemptionReasonCode");
const TaxCategoryId_1 = require("./TaxCategoryId");
const { CAC, CBC } = constants_1.prefix;
let TaxCategory = class TaxCategory {
    constructor(tc) {
        this.percent = tc.percent;
        this.taxExemptionReasonCode = tc.taxExemptionReasonCode;
        this.tierRange = tc.tierRange;
        this.taxScheme = tc.taxScheme;
        this.id = tc.id;
    }
};
__decorate([
    xml_serializer_ts_1.XMLChild({ namespace: CBC, name: 'ID' }),
    __metadata("design:type", TaxCategoryId_1.TaxCategoryId)
], TaxCategory.prototype, "id", void 0);
__decorate([
    xml_serializer_ts_1.XMLChild({ namespace: CBC, name: 'Percent' }),
    __metadata("design:type", String)
], TaxCategory.prototype, "percent", void 0);
__decorate([
    xml_serializer_ts_1.XMLChild({ namespace: CBC, name: 'TaxExemptionReasonCode' }),
    __metadata("design:type", TaxExemptionReasonCode_1.TaxExemptionReasonCode)
], TaxCategory.prototype, "taxExemptionReasonCode", void 0);
__decorate([
    xml_serializer_ts_1.XMLChild({ namespace: CBC, name: 'TierRange' }),
    __metadata("design:type", String)
], TaxCategory.prototype, "tierRange", void 0);
__decorate([
    xml_serializer_ts_1.XMLChild({ namespace: CAC, name: 'TaxScheme' }),
    __metadata("design:type", TaxScheme_1.TaxScheme)
], TaxCategory.prototype, "taxScheme", void 0);
TaxCategory = __decorate([
    xml_serializer_ts_1.XMLElement({ root: CAC }),
    __metadata("design:paramtypes", [TaxCategory])
], TaxCategory);
exports.TaxCategory = TaxCategory;
//# sourceMappingURL=TaxCategory.js.map