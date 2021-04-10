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
exports.PrepaidPayment = void 0;
const xml_serializer_ts_1 = require("xml-serializer-ts");
const constants_1 = require("@fe/common/constants");
const PayableAmount_1 = require("./PayableAmount");
const { CAC, CBC } = constants_1.prefix;
let PrepaidPayment = class PrepaidPayment {
    constructor(pp) {
        this.id = pp.id;
        this.paidAmount = pp.paidAmount;
        this.paidDate = pp.paidDate;
        this.paidTime = pp.paidTime;
    }
};
__decorate([
    xml_serializer_ts_1.XMLChild({ namespace: CBC, name: 'ID' }),
    __metadata("design:type", String)
], PrepaidPayment.prototype, "id", void 0);
__decorate([
    xml_serializer_ts_1.XMLChild({ namespace: CBC, name: 'PaidAmount' }),
    __metadata("design:type", PayableAmount_1.PayableAmount)
], PrepaidPayment.prototype, "paidAmount", void 0);
__decorate([
    xml_serializer_ts_1.XMLChild({ namespace: CBC, name: 'PaidDate' }),
    __metadata("design:type", String)
], PrepaidPayment.prototype, "paidDate", void 0);
__decorate([
    xml_serializer_ts_1.XMLChild({ namespace: CBC, name: 'PaidTime' }),
    __metadata("design:type", String)
], PrepaidPayment.prototype, "paidTime", void 0);
PrepaidPayment = __decorate([
    xml_serializer_ts_1.XMLElement({ root: CAC }),
    __metadata("design:paramtypes", [PrepaidPayment])
], PrepaidPayment);
exports.PrepaidPayment = PrepaidPayment;
//# sourceMappingURL=PrepaidPayment.js.map