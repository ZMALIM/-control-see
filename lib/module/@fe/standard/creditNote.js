var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { XMLElement, XMLChild, XMLAttribute } from 'xml-serializer-ts';
import { Namespaces, prefix } from '@fe/common/constants';
import { UblExtensions, SignatureCac, AccountingSupplierParty, LegalMonetaryTotal, } from '@fe/structures';
const { CREDIT_NOTE, EXT, CAC, CBC } = prefix;
let CreditNote = class CreditNote {
    constructor() {
        this.xmlns = Namespaces.xmlnsCreditNote;
        this.cac = Namespaces.cac;
        this.cbc = Namespaces.cbc;
        this.ccts = Namespaces.ccts;
        this.ds = Namespaces.ds;
        this.ext = Namespaces.ext;
        this.qdt = Namespaces.qdt;
        this.sac = Namespaces.sac;
        this.udt = Namespaces.udt;
        this.xsi = Namespaces.xsi;
        this.discrepancyResponses = new Array();
        this.billingReferences = new Array();
        this.despatchDocumentReferences = new Array();
        this.additionalDocumentReferences = new Array();
        this.taxTotals = new Array();
        this.creditNoteLines = new Array();
    }
};
__decorate([
    XMLAttribute({ name: '' }),
    __metadata("design:type", String)
], CreditNote.prototype, "xmlns", void 0);
__decorate([
    XMLAttribute({ namespace: 'xmlns' }),
    __metadata("design:type", String)
], CreditNote.prototype, "cac", void 0);
__decorate([
    XMLAttribute({ namespace: 'xmlns' }),
    __metadata("design:type", String)
], CreditNote.prototype, "cbc", void 0);
__decorate([
    XMLAttribute({ namespace: 'xmlns' }),
    __metadata("design:type", String)
], CreditNote.prototype, "ccts", void 0);
__decorate([
    XMLAttribute({ namespace: 'xmlns' }),
    __metadata("design:type", String)
], CreditNote.prototype, "ds", void 0);
__decorate([
    XMLAttribute({ namespace: 'xmlns' }),
    __metadata("design:type", String)
], CreditNote.prototype, "ext", void 0);
__decorate([
    XMLAttribute({ namespace: 'xmlns' }),
    __metadata("design:type", String)
], CreditNote.prototype, "qdt", void 0);
__decorate([
    XMLAttribute({ namespace: 'xmlns' }),
    __metadata("design:type", String)
], CreditNote.prototype, "sac", void 0);
__decorate([
    XMLAttribute({ namespace: 'xmlns' }),
    __metadata("design:type", String)
], CreditNote.prototype, "udt", void 0);
__decorate([
    XMLAttribute({ namespace: 'xmlns' }),
    __metadata("design:type", String)
], CreditNote.prototype, "xsi", void 0);
__decorate([
    XMLChild({ namespace: EXT, name: 'UBLExtensions' }),
    __metadata("design:type", UblExtensions)
], CreditNote.prototype, "ublExtensions", void 0);
__decorate([
    XMLChild({ namespace: CBC, name: 'UBLVersionID' }),
    __metadata("design:type", String)
], CreditNote.prototype, "ublVersionID", void 0);
__decorate([
    XMLChild({ namespace: CBC, name: 'CustomizationID' }),
    __metadata("design:type", String)
], CreditNote.prototype, "customizationID", void 0);
__decorate([
    XMLChild({ namespace: CBC, name: 'ID' }),
    __metadata("design:type", String)
], CreditNote.prototype, "id", void 0);
__decorate([
    XMLChild({ namespace: CBC, name: 'IssueDate' }),
    __metadata("design:type", String)
], CreditNote.prototype, "issueDate", void 0);
__decorate([
    XMLChild({ namespace: CBC, name: 'DocumentCurrencyCode' }),
    __metadata("design:type", String)
], CreditNote.prototype, "documentCurrencyCode", void 0);
__decorate([
    XMLChild({ namespace: CAC, name: 'DiscrepancyResponse' }),
    __metadata("design:type", Array)
], CreditNote.prototype, "discrepancyResponses", void 0);
__decorate([
    XMLChild({ namespace: CAC, name: 'BillingReference' }),
    __metadata("design:type", Array)
], CreditNote.prototype, "billingReferences", void 0);
__decorate([
    XMLChild({ namespace: CAC, name: 'DespatchDocumentReference' }),
    __metadata("design:type", Array)
], CreditNote.prototype, "despatchDocumentReferences", void 0);
__decorate([
    XMLChild({ namespace: CAC, name: 'AdditionalDocumentReference' }),
    __metadata("design:type", Array)
], CreditNote.prototype, "additionalDocumentReferences", void 0);
__decorate([
    XMLChild({ namespace: CAC, name: 'Signature' }),
    __metadata("design:type", SignatureCac)
], CreditNote.prototype, "signature", void 0);
__decorate([
    XMLChild({ namespace: CAC, name: 'AccountingSupplierParty' }),
    __metadata("design:type", AccountingSupplierParty)
], CreditNote.prototype, "accountingSupplierParty", void 0);
__decorate([
    XMLChild({ namespace: CAC, name: 'AccountingCustomerParty' }),
    __metadata("design:type", AccountingSupplierParty)
], CreditNote.prototype, "accountingCustomerParty", void 0);
__decorate([
    XMLChild({ namespace: CAC, name: 'TaxTotal' }),
    __metadata("design:type", Array)
], CreditNote.prototype, "taxTotals", void 0);
__decorate([
    XMLChild({ namespace: CAC, name: 'LegalMonetaryTotal' }),
    __metadata("design:type", LegalMonetaryTotal)
], CreditNote.prototype, "legalMonetaryTotal", void 0);
__decorate([
    XMLChild({ namespace: CAC, name: 'CreditNoteLine' }),
    __metadata("design:type", Array)
], CreditNote.prototype, "creditNoteLines", void 0);
CreditNote = __decorate([
    XMLElement({ root: CREDIT_NOTE }),
    __metadata("design:paramtypes", [])
], CreditNote);
export { CreditNote };
//# sourceMappingURL=creditNote.js.map