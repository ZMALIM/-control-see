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
import { InvoicedQuantity } from './InvoicedQuantity';
import { PayableAmount } from './PayableAmount';
import { PricingReference } from './PricingReference';
import { AllowanceCharge } from './AllowanceCharge';
import { Item } from './Item';
import { Price } from './Price';
const { CAC, CBC } = prefix;
let InvoiceLine = class InvoiceLine {
    constructor(il) {
        this.id = il.id;
        this.creditedQuantity = il.creditedQuantity;
        this.invoicedQuantity = il.invoicedQuantity;
        this.debitedQuantity = il.debitedQuantity;
        this.lineExtensionAmount = il.lineExtensionAmount;
        this.pricingReference = il.pricingReference;
        this.allowanceCharge = il.allowanceCharge;
        this.taxTotals = il.taxTotals;
        this.item = il.item;
        this.price = il.price;
        this.taxTotals = new Array();
    }
};
__decorate([
    XMLChild({ namespace: CBC, name: 'ID' }),
    __metadata("design:type", String)
], InvoiceLine.prototype, "id", void 0);
__decorate([
    XMLChild({ namespace: CBC, name: 'CreditedQuantity' }),
    __metadata("design:type", InvoicedQuantity)
], InvoiceLine.prototype, "creditedQuantity", void 0);
__decorate([
    XMLChild({ namespace: CBC, name: 'InvoicedQuantity' }),
    __metadata("design:type", InvoicedQuantity)
], InvoiceLine.prototype, "invoicedQuantity", void 0);
__decorate([
    XMLChild({ namespace: CBC, name: 'DebitedQuantity' }),
    __metadata("design:type", InvoicedQuantity)
], InvoiceLine.prototype, "debitedQuantity", void 0);
__decorate([
    XMLChild({ namespace: CBC, name: 'LineExtensionAmount' }),
    __metadata("design:type", PayableAmount)
], InvoiceLine.prototype, "lineExtensionAmount", void 0);
__decorate([
    XMLChild({ namespace: CAC, name: 'PricingReference' }),
    __metadata("design:type", PricingReference)
], InvoiceLine.prototype, "pricingReference", void 0);
__decorate([
    XMLChild({ namespace: CAC, name: 'allowanceCharge' }),
    __metadata("design:type", AllowanceCharge)
], InvoiceLine.prototype, "allowanceCharge", void 0);
__decorate([
    XMLChild({ namespace: CAC, name: 'TaxTotal' }),
    __metadata("design:type", Array)
], InvoiceLine.prototype, "taxTotals", void 0);
__decorate([
    XMLChild({ namespace: CAC, name: 'Item' }),
    __metadata("design:type", Item)
], InvoiceLine.prototype, "item", void 0);
__decorate([
    XMLChild({ namespace: CAC, name: 'Price' }),
    __metadata("design:type", Price)
], InvoiceLine.prototype, "price", void 0);
InvoiceLine = __decorate([
    XMLElement({ root: CAC }),
    __metadata("design:paramtypes", [InvoiceLine])
], InvoiceLine);
export { InvoiceLine };
//# sourceMappingURL=InvoiceLine.js.map