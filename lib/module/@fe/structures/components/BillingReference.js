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
import { InvoiceDocumentReference } from './InvoiceDocumentReference';
const { CAC } = prefix;
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
    XMLChild({ namespace: CAC, name: 'InvoiceDocumentReference' }),
    __metadata("design:type", InvoiceDocumentReference),
    __metadata("design:paramtypes", [InvoiceDocumentReference])
], BillingReference.prototype, "invoiceDocumentReference", null);
BillingReference = __decorate([
    XMLElement({ root: CAC }),
    __metadata("design:paramtypes", [InvoiceDocumentReference])
], BillingReference);
export { BillingReference };
//# sourceMappingURL=BillingReference.js.map