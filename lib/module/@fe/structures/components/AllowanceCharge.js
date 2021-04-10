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
import { AllowanceChargeReasonCode } from './AllowanceChargeReasonCode';
const { CAC, CBC } = prefix;
let AllowanceCharge = class AllowanceCharge {
    constructor(ac) {
        this.chargeIndicator = ac.chargeIndicator;
        this.allowanceChargeReasonCode = ac.allowanceChargeReasonCode;
        this.multiplierFactorNumeric = ac.multiplierFactorNumeric;
        this.amount = ac.amount;
        this.baseAmount = ac.baseAmount;
    }
};
__decorate([
    XMLChild({ namespace: CBC, name: 'ChargeIndicator' }),
    __metadata("design:type", String)
], AllowanceCharge.prototype, "chargeIndicator", void 0);
__decorate([
    XMLChild({ namespace: CBC, name: 'AllowanceChargeReasonCode' }),
    __metadata("design:type", AllowanceChargeReasonCode)
], AllowanceCharge.prototype, "allowanceChargeReasonCode", void 0);
__decorate([
    XMLChild({ namespace: CBC, name: 'MultiplierFactorNumeric' }),
    __metadata("design:type", String)
], AllowanceCharge.prototype, "multiplierFactorNumeric", void 0);
__decorate([
    XMLChild({ namespace: CBC, name: 'Amount' }),
    __metadata("design:type", PayableAmount)
], AllowanceCharge.prototype, "amount", void 0);
__decorate([
    XMLChild({ namespace: CBC, name: 'BaseAmount' }),
    __metadata("design:type", PayableAmount)
], AllowanceCharge.prototype, "baseAmount", void 0);
AllowanceCharge = __decorate([
    XMLElement({ root: CAC }),
    __metadata("design:paramtypes", [AllowanceCharge])
], AllowanceCharge);
export { AllowanceCharge };
//# sourceMappingURL=AllowanceCharge.js.map