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
exports.BillingReference = void 0;
const xml_serializer_ts_1 = require("xml-serializer-ts");
const constants_1 = require("@fe/common/constants");
const InvoiceDocumentReference_1 = require("./InvoiceDocumentReference");
const { CAC } = constants_1.prefix;
let BillingReference = class BillingReference {
    constructor(idr) {
        this.invoiceDocumentReference = idr;
    }
    get invoiceDocumentReference() {
        return this._invoiceDocumentReference;
    }
    set invoiceDocumentReference(invoiceDocumentReference) {
        this._invoiceDocumentReference = invoiceDocumentReference;
    }
};
__decorate([
    xml_serializer_ts_1.XMLChild({ namespace: CAC, name: 'InvoiceDocumentReference' }),
    __metadata("design:type", InvoiceDocumentReference_1.InvoiceDocumentReference),
    __metadata("design:paramtypes", [InvoiceDocumentReference_1.InvoiceDocumentReference])
], BillingReference.prototype, "invoiceDocumentReference", null);
BillingReference = __decorate([
    xml_serializer_ts_1.XMLElement({ root: CAC }),
    __metadata("design:paramtypes", [InvoiceDocumentReference_1.InvoiceDocumentReference])
], BillingReference);
exports.BillingReference = BillingReference;
//# sourceMappingURL=BillingReference.js.map