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
exports.TaxExemptionReasonCode = void 0;
const xml_serializer_ts_1 = require("xml-serializer-ts");
const constants_1 = require("@fe/common/constants");
const { CBC } = constants_1.prefix;
let TaxExemptionReasonCode = class TaxExemptionReasonCode {
    constructor(terc) {
        this.listAgencyName = terc.listAgencyName;
        this.listName = terc.listName;
        this.listURI = terc.listURI;
        this.value = terc.value;
    }
};
__decorate([
    xml_serializer_ts_1.XMLAttribute({ namespace: '' }),
    __metadata("design:type", String)
], TaxExemptionReasonCode.prototype, "listAgencyName", void 0);
__decorate([
    xml_serializer_ts_1.XMLAttribute({ namespace: '' }),
    __metadata("design:type", String)
], TaxExemptionReasonCode.prototype, "listName", void 0);
__decorate([
    xml_serializer_ts_1.XMLAttribute({ namespace: '' }),
    __metadata("design:type", String)
], TaxExemptionReasonCode.prototype, "listURI", void 0);
__decorate([
    xml_serializer_ts_1.XMLText({ name: '' }),
    __metadata("design:type", String)
], TaxExemptionReasonCode.prototype, "value", void 0);
TaxExemptionReasonCode = __decorate([
    xml_serializer_ts_1.XMLElement({ root: CBC }),
    __metadata("design:paramtypes", [TaxExemptionReasonCode])
], TaxExemptionReasonCode);
exports.TaxExemptionReasonCode = TaxExemptionReasonCode;
//# sourceMappingURL=TaxExemptionReasonCode.js.map