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
exports.AccountingSupplierParty = void 0;
const xml_serializer_ts_1 = require("xml-serializer-ts");
const constants_1 = require("@fe/common/constants");
const Party_1 = require("./Party");
const { CAC, CBC } = constants_1.prefix;
let AccountingSupplierParty = class AccountingSupplierParty {
    constructor(asp) {
        this.customerAssignedAccountID = asp.customerAssignedAccountID;
        this.additionalAccountID = asp.additionalAccountID;
        this.party = asp.party;
    }
};
__decorate([
    xml_serializer_ts_1.XMLChild({ namespace: CBC, name: 'CustomerAssignedAccountID' }),
    __metadata("design:type", String)
], AccountingSupplierParty.prototype, "customerAssignedAccountID", void 0);
__decorate([
    xml_serializer_ts_1.XMLChild({ namespace: CBC, name: 'AdditionalAccountID' }),
    __metadata("design:type", String)
], AccountingSupplierParty.prototype, "additionalAccountID", void 0);
__decorate([
    xml_serializer_ts_1.XMLChild({ namespace: CAC, name: 'Party' }),
    __metadata("design:type", Party_1.Party)
], AccountingSupplierParty.prototype, "party", void 0);
AccountingSupplierParty = __decorate([
    xml_serializer_ts_1.XMLElement({ root: CAC }),
    __metadata("design:paramtypes", [AccountingSupplierParty])
], AccountingSupplierParty);
exports.AccountingSupplierParty = AccountingSupplierParty;
//# sourceMappingURL=AccountingSupplierParty.js.map