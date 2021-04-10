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
import { TaxScheme } from './TaxScheme';
import { CompanyID } from './CompanyID';
import { RegistrationAddress } from './RegistrationAddress';
const { CAC, CBC } = prefix;
let PartyTaxScheme = class PartyTaxScheme {
    constructor(pts) {
        this.registrationName = pts.registrationName;
        this.companyID = pts.companyID;
        this.taxScheme = pts.taxScheme;
        this.registrationAddress = pts.registrationAddress;
    }
};
__decorate([
    XMLChild({ namespace: CBC, name: 'RegistrationName' }),
    __metadata("design:type", String)
], PartyTaxScheme.prototype, "registrationName", void 0);
__decorate([
    XMLChild({ namespace: CBC, name: 'CompanyID' }),
    __metadata("design:type", CompanyID)
], PartyTaxScheme.prototype, "companyID", void 0);
__decorate([
    XMLChild({ namespace: CAC, name: 'TaxScheme' }),
    __metadata("design:type", TaxScheme)
], PartyTaxScheme.prototype, "taxScheme", void 0);
__decorate([
    XMLChild({ namespace: CAC, name: 'RegistrationAddress' }),
    __metadata("design:type", RegistrationAddress)
], PartyTaxScheme.prototype, "registrationAddress", void 0);
PartyTaxScheme = __decorate([
    XMLElement({ root: CAC }),
    __metadata("design:paramtypes", [PartyTaxScheme])
], PartyTaxScheme);
export { PartyTaxScheme };
//# sourceMappingURL=PartyTaxScheme.js.map