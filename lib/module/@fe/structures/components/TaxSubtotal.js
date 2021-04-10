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
import { TaxCategory } from './TaxCategory';
const { CAC, CBC } = prefix;
let TaxSubtotal = class TaxSubtotal {
    constructor(ts) {
        this.taxableAmount = ts.taxableAmount;
        this.taxAmount = ts.taxAmount;
        this.taxCategory = ts.taxCategory;
        this.percent = ts.percent;
    }
};
__decorate([
    XMLChild({ namespace: CBC, name: 'TaxableAmount' }),
    __metadata("design:type", PayableAmount)
], TaxSubtotal.prototype, "taxableAmount", void 0);
__decorate([
    XMLChild({ namespace: CBC, name: 'TaxAmount' }),
    __metadata("design:type", PayableAmount)
], TaxSubtotal.prototype, "taxAmount", void 0);
__decorate([
    XMLChild({ namespace: CAC, name: 'TaxCategory' }),
    __metadata("design:type", TaxCategory)
], TaxSubtotal.prototype, "taxCategory", void 0);
__decorate([
    XMLChild({ namespace: CBC, name: 'Percent' }),
    __metadata("design:type", Number)
], TaxSubtotal.prototype, "percent", void 0);
TaxSubtotal = __decorate([
    XMLElement({ root: CAC }),
    __metadata("design:paramtypes", [TaxSubtotal])
], TaxSubtotal);
export { TaxSubtotal };
//# sourceMappingURL=TaxSubtotal.js.map