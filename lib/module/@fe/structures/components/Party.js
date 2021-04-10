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
import { PartyName } from './PartyName';
import { PostalAddress } from './PostalAddress';
import { PartyLegalEntity } from './PartyLegalEntity';
import { PartyIdentification } from './PartyIdentification';
import { PartyTaxScheme } from './PartyTaxScheme';
const { CAC } = prefix;
let Party = class Party {
    constructor(party) {
        this.partyIdentification = party.partyIdentification;
        this.partyName = party.partyName;
        this.partyTaxScheme = party.partyTaxScheme;
        this.postalAddress = party.postalAddress;
        this.partyLegalEntity = party.partyLegalEntity;
    }
};
__decorate([
    XMLChild({ namespace: CAC, name: 'PartyIdentification' }),
    __metadata("design:type", PartyIdentification)
], Party.prototype, "partyIdentification", void 0);
__decorate([
    XMLChild({ namespace: CAC, name: 'PartyName' }),
    __metadata("design:type", PartyName)
], Party.prototype, "partyName", void 0);
__decorate([
    XMLChild({ namespace: CAC, name: 'PartyTaxScheme' }),
    __metadata("design:type", PartyTaxScheme)
], Party.prototype, "partyTaxScheme", void 0);
__decorate([
    XMLChild({ namespace: CAC, name: 'PostalAddress' }),
    __metadata("design:type", PostalAddress)
], Party.prototype, "postalAddress", void 0);
__decorate([
    XMLChild({ namespace: CAC, name: 'PartyLegalEntity' }),
    __metadata("design:type", PartyLegalEntity)
], Party.prototype, "partyLegalEntity", void 0);
Party = __decorate([
    XMLElement({ root: CAC }),
    __metadata("design:paramtypes", [Party])
], Party);
export { Party };
//# sourceMappingURL=Party.js.map