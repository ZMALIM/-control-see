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
exports.Invoice = void 0;
const xml_serializer_ts_1 = require("xml-serializer-ts");
const constants_1 = require("@fe/common/constants");
const structures_1 = require("@fe/structures");
const { INVOICE, EXT, CAC, CBC } = constants_1.prefix;
let Invoice = class Invoice {
    constructor() {
        this.xmlns = constants_1.Namespaces.xmlnsInvoice;
        this.cac = constants_1.Namespaces.cac;
        this.cbc = constants_1.Namespaces.cbc;
        this.ccts = constants_1.Namespaces.ccts;
        this.ds = constants_1.Namespaces.ds;
        this.ext = constants_1.Namespaces.ext;
        this.qdt = constants_1.Namespaces.qdt;
        this.sac = constants_1.Namespaces.sac;
        this.udt = constants_1.Namespaces.udt;
        this.xsi = constants_1.Namespaces.xsi;
        this.additionalDocumentReferences = new Array();
        this.taxTotals = new Array();
        this.invoiceLine = new Array();
        this.despatchDocumentReferences = new Array();
    }
};
__decorate([
    xml_serializer_ts_1.XMLAttribute({ name: '' }),
    __metadata("design:type", String)
], Invoice.prototype, "xmlns", void 0);
__decorate([
    xml_serializer_ts_1.XMLAttribute({ namespace: 'xmlns' }),
    __metadata("design:type", String)
], Invoice.prototype, "cac", void 0);
__decorate([
    xml_serializer_ts_1.XMLAttribute({ namespace: 'xmlns' }),
    __metadata("design:type", String)
], Invoice.prototype, "cbc", void 0);
__decorate([
    xml_serializer_ts_1.XMLAttribute({ namespace: 'xmlns' }),
    __metadata("design:type", String)
], Invoice.prototype, "ccts", void 0);
__decorate([
    xml_serializer_ts_1.XMLAttribute({ namespace: 'xmlns' }),
    __metadata("design:type", String)
], Invoice.prototype, "ds", void 0);
__decorate([
    xml_serializer_ts_1.XMLAttribute({ namespace: 'xmlns' }),
    __metadata("design:type", String)
], Invoice.prototype, "ext", void 0);
__decorate([
    xml_serializer_ts_1.XMLAttribute({ namespace: 'xmlns' }),
    __metadata("design:type", String)
], Invoice.prototype, "qdt", void 0);
__decorate([
    xml_serializer_ts_1.XMLAttribute({ namespace: 'xmlns' }),
    __metadata("design:type", String)
], Invoice.prototype, "sac", void 0);
__decorate([
    xml_serializer_ts_1.XMLAttribute({ namespace: 'xmlns' }),
    __metadata("design:type", String)
], Invoice.prototype, "udt", void 0);
__decorate([
    xml_serializer_ts_1.XMLAttribute({ namespace: 'xmlns' }),
    __metadata("design:type", String)
], Invoice.prototype, "xsi", void 0);
__decorate([
    xml_serializer_ts_1.XMLChild({ namespace: EXT, name: 'UBLExtensions' }),
    __metadata("design:type", structures_1.UblExtensions)
], Invoice.prototype, "ublExtensions", void 0);
__decorate([
    xml_serializer_ts_1.XMLChild({ namespace: CBC, name: 'UBLVersionID' }),
    __metadata("design:type", String)
], Invoice.prototype, "ublVersionID", void 0);
__decorate([
    xml_serializer_ts_1.XMLChild({ namespace: CBC, name: 'CustomizationID' }),
    __metadata("design:type", String)
], Invoice.prototype, "customizationID", void 0);
__decorate([
    xml_serializer_ts_1.XMLChild({ namespace: CBC, name: 'ProfileID' }),
    __metadata("design:type", structures_1.ProfileID)
], Invoice.prototype, "profileID", void 0);
__decorate([
    xml_serializer_ts_1.XMLChild({ namespace: CBC, name: 'ID' }),
    __metadata("design:type", String)
], Invoice.prototype, "id", void 0);
__decorate([
    xml_serializer_ts_1.XMLChild({ namespace: CBC, name: 'IssueDate' }),
    __metadata("design:type", String)
], Invoice.prototype, "issueDate", void 0);
__decorate([
    xml_serializer_ts_1.XMLChild({ namespace: CBC, name: 'IssueTime' }),
    __metadata("design:type", String)
], Invoice.prototype, "issueTime", void 0);
__decorate([
    xml_serializer_ts_1.XMLChild({ namespace: CBC, name: 'DueDate' }),
    __metadata("design:type", String)
], Invoice.prototype, "dueDate", void 0);
__decorate([
    xml_serializer_ts_1.XMLChild({ namespace: CBC, name: 'InvoiceTypeCode' }),
    __metadata("design:type", structures_1.InvoiceTypeCode)
], Invoice.prototype, "invoiceTypeCode", void 0);
__decorate([
    xml_serializer_ts_1.XMLChild({ namespace: CBC, name: 'Note' }),
    __metadata("design:type", structures_1.Note)
], Invoice.prototype, "note", void 0);
__decorate([
    xml_serializer_ts_1.XMLChild({ namespace: CBC, name: 'DocumentCurrencyCode' }),
    __metadata("design:type", structures_1.DocumentCurrencyCode)
], Invoice.prototype, "documentCurrencyCode", void 0);
__decorate([
    xml_serializer_ts_1.XMLChild({ namespace: CBC, name: 'LineCountNumeric' }),
    __metadata("design:type", String)
], Invoice.prototype, "lineCountNumeric", void 0);
__decorate([
    xml_serializer_ts_1.XMLChild({ namespace: CAC, name: 'AdditionalDocumentReference' }),
    __metadata("design:type", Array)
], Invoice.prototype, "additionalDocumentReferences", void 0);
__decorate([
    xml_serializer_ts_1.XMLChild({ namespace: CAC, name: 'Signature' }),
    __metadata("design:type", structures_1.SignatureCac)
], Invoice.prototype, "signature", void 0);
__decorate([
    xml_serializer_ts_1.XMLChild({ namespace: CAC, name: 'AccountingSupplierParty' }),
    __metadata("design:type", structures_1.AccountingSupplierParty)
], Invoice.prototype, "accountingSupplierParty", void 0);
__decorate([
    xml_serializer_ts_1.XMLChild({ namespace: CAC, name: 'AccountingCustomerParty' }),
    __metadata("design:type", structures_1.AccountingSupplierParty)
], Invoice.prototype, "accountingCustomerParty", void 0);
__decorate([
    xml_serializer_ts_1.XMLChild({ namespace: CAC, name: 'PrepaidPayment' }),
    __metadata("design:type", structures_1.PrepaidPayment)
], Invoice.prototype, "prepaidPayment", void 0);
__decorate([
    xml_serializer_ts_1.XMLChild({ namespace: CAC, name: 'AllowanceCharge' }),
    __metadata("design:type", structures_1.AllowanceCharge)
], Invoice.prototype, "allowanceCharge", void 0);
__decorate([
    xml_serializer_ts_1.XMLChild({ namespace: CAC, name: 'TaxTotal' }),
    __metadata("design:type", Array)
], Invoice.prototype, "taxTotals", void 0);
__decorate([
    xml_serializer_ts_1.XMLChild({ namespace: CAC, name: 'OrderReference' }),
    __metadata("design:type", structures_1.OrderReference)
], Invoice.prototype, "orderReference", void 0);
__decorate([
    xml_serializer_ts_1.XMLChild({ namespace: CAC, name: 'DespatchDocumentReference' }),
    __metadata("design:type", Array)
], Invoice.prototype, "despatchDocumentReferences", void 0);
__decorate([
    xml_serializer_ts_1.XMLChild({ namespace: CAC, name: 'LegalMonetaryTotal' }),
    __metadata("design:type", structures_1.LegalMonetaryTotal)
], Invoice.prototype, "legalMonetaryTotal", void 0);
__decorate([
    xml_serializer_ts_1.XMLChild({ namespace: CAC, name: 'InvoiceLine' }),
    __metadata("design:type", Array)
], Invoice.prototype, "invoiceLine", void 0);
Invoice = __decorate([
    xml_serializer_ts_1.XMLElement({ root: INVOICE }),
    __metadata("design:paramtypes", [])
], Invoice);
exports.Invoice = Invoice;
//# sourceMappingURL=invoice.js.map