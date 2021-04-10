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
import { PayableAmount } from './PayableAmount';
const { CAC, CBC } = prefix;
let LegalMonetaryTotal = class LegalMonetaryTotal {
    constructor(lmt) {
        this.lineExtensionAmount = lmt.lineExtensionAmount;
        this.taxInclusiveAmount = lmt.taxInclusiveAmount;
        this.payableAmount = lmt.payableAmount;
        this.allowanceTotalAmount = lmt.allowanceTotalAmount;
        this.chargeTotalAmount = lmt.chargeTotalAmount;
        this.prepaidAmount = lmt.prepaidAmount;
    }
};
__decorate([
    XMLChild({ namespace: CBC, name: 'LineExtensionAmount' }),
    __metadata("design:type", PayableAmount)
], LegalMonetaryTotal.prototype, "lineExtensionAmount", void 0);
__decorate([
    XMLChild({ namespace: CBC, name: 'TaxInclusiveAmount' }),
    __metadata("design:type", PayableAmount)
], LegalMonetaryTotal.prototype, "taxInclusiveAmount", void 0);
__decorate([
    XMLChild({ namespace: CBC, name: 'AllowanceTotalAmount' }),
    __metadata("design:type", PayableAmount)
], LegalMonetaryTotal.prototype, "allowanceTotalAmount", void 0);
__decorate([
    XMLChild({ namespace: CBC, name: 'ChargeTotalAmount' }),
    __metadata("design:type", PayableAmount)
], LegalMonetaryTotal.prototype, "chargeTotalAmount", void 0);
__decorate([
    XMLChild({ namespace: CBC, name: 'PrepaidAmount' }),
    __metadata("design:type", PayableAmount)
], LegalMonetaryTotal.prototype, "prepaidAmount", void 0);
__decorate([
    XMLChild({ namespace: CBC, name: 'PayableAmount' }),
    __metadata("design:type", PayableAmount)
], LegalMonetaryTotal.prototype, "payableAmount", void 0);
LegalMonetaryTotal = __decorate([
    XMLElement({ root: CAC }),
    __metadata("design:paramtypes", [LegalMonetaryTotal])
], LegalMonetaryTotal);
export { LegalMonetaryTotal };
//# sourceMappingURL=LegalMonetaryTotal.js.map