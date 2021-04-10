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
import { PartyIdentification } from './PartyIdentification';
import { PartyName } from './PartyName';
const { CAC } = prefix;
let SignatoryParty = class SignatoryParty {
    constructor(sp) {
        this.partyIdentification = sp.partyIdentification;
        this.partyName = sp.partyName;
    }
    get partyIdentification() {
        return this._partyIdentification;
    }
    set partyIdentification(partyIdentification) {
        this._partyIdentification = partyIdentification;
    }
    get partyName() {
        return this._partyName;
    }
    set partyName(partyName) {
        this._partyName = partyName;
    }
};
__decorate([
    XMLChild({ namespace: CAC, name: 'PartyIdentification' }),
    __metadata("design:type", PartyIdentification),
    __metadata("design:paramtypes", [PartyIdentification])
], SignatoryParty.prototype, "partyIdentification", null);
__decorate([
    XMLChild({ namespace: CAC, name: 'PartyName' }),
    __metadata("design:type", PartyName),
    __metadata("design:paramtypes", [PartyName])
], SignatoryParty.prototype, "partyName", null);
SignatoryParty = __decorate([
    XMLElement({ root: CAC }),
    __metadata("design:paramtypes", [SignatoryParty])
], SignatoryParty);
export { SignatoryParty };
//# sourceMappingURL=SignatoryParty.js.map