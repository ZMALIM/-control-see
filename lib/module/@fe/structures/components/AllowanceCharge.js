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
exports.AllowanceCharge = void 0;
const xml_serializer_ts_1 = require("xml-serializer-ts");
const constants_1 = require("@fe/common/constants");
const PayableAmount_1 = require("./PayableAmount");
const AllowanceChargeReasonCode_1 = require("./AllowanceChargeReasonCode");
const { CAC, CBC } = constants_1.prefix;
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
    xml_serializer_ts_1.XMLChild({ namespace: CBC, name: 'ChargeIndicator' }),
    __metadata("design:type", String)
], AllowanceCharge.prototype, "chargeIndicator", void 0);
__decorate([
    xml_serializer_ts_1.XMLChild({ namespace: CBC, name: 'AllowanceChargeReasonCode' }),
    __metadata("design:type", AllowanceChargeReasonCode_1.AllowanceChargeReasonCode)
], AllowanceCharge.prototype, "allowanceChargeReasonCode", void 0);
__decorate([
    xml_serializer_ts_1.XMLChild({ namespace: CBC, name: 'MultiplierFactorNumeric' }),
    __metadata("design:type", String)
], AllowanceCharge.prototype, "multiplierFactorNumeric", void 0);
__decorate([
    xml_serializer_ts_1.XMLChild({ namespace: CBC, name: 'Amount' }),
    __metadata("design:type", PayableAmount_1.PayableAmount)
], AllowanceCharge.prototype, "amount", void 0);
__decorate([
    xml_serializer_ts_1.XMLChild({ namespace: CBC, name: 'BaseAmount' }),
    __metadata("design:type", PayableAmount_1.PayableAmount)
], AllowanceCharge.prototype, "baseAmount", void 0);
AllowanceCharge = __decorate([
    xml_serializer_ts_1.XMLElement({ root: CAC }),
    __metadata("design:paramtypes", [AllowanceCharge])
], AllowanceCharge);
exports.AllowanceCharge = AllowanceCharge;
//# sourceMappingURL=AllowanceCharge.js.map