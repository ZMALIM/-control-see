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
exports.TaxSubtotal = void 0;
const xml_serializer_ts_1 = require("xml-serializer-ts");
const constants_1 = require("@fe/common/constants");
const PayableAmount_1 = require("./PayableAmount");
const TaxCategory_1 = require("./TaxCategory");
const { CAC, CBC } = constants_1.prefix;
let TaxSubtotal = class TaxSubtotal {
    constructor(ts) {
        this.taxableAmount = ts.taxableAmount;
        this.taxAmount = ts.taxAmount;
        this.taxCategory = ts.taxCategory;
        this.percent = ts.percent;
    }
};
__decorate([
    xml_serializer_ts_1.XMLChild({ namespace: CBC, name: 'TaxableAmount' }),
    __metadata("design:type", PayableAmount_1.PayableAmount)
], TaxSubtotal.prototype, "taxableAmount", void 0);
__decorate([
    xml_serializer_ts_1.XMLChild({ namespace: CBC, name: 'TaxAmount' }),
    __metadata("design:type", PayableAmount_1.PayableAmount)
], TaxSubtotal.prototype, "taxAmount", void 0);
__decorate([
    xml_serializer_ts_1.XMLChild({ namespace: CAC, name: 'TaxCategory' }),
    __metadata("design:type", TaxCategory_1.TaxCategory)
], TaxSubtotal.prototype, "taxCategory", void 0);
__decorate([
    xml_serializer_ts_1.XMLChild({ namespace: CBC, name: 'Percent' }),
    __metadata("design:type", Number)
], TaxSubtotal.prototype, "percent", void 0);
TaxSubtotal = __decorate([
    xml_serializer_ts_1.XMLElement({ root: CAC }),
    __metadata("design:paramtypes", [TaxSubtotal])
], TaxSubtotal);
exports.TaxSubtotal = TaxSubtotal;
//# sourceMappingURL=TaxSubtotal.js.map