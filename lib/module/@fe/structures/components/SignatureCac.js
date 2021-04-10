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
import { SignatoryParty } from './SignatoryParty';
import { DigitalSignatureAttachment } from './DigitalSignatureAttachment';
const { CAC, CBC } = prefix;
let SignatureCac = class SignatureCac {
    constructor(sc) {
        this.id = sc.id;
        this.signatoryParty = sc.signatoryParty;
        this.digitalSignatureAttachment = sc.digitalSignatureAttachment;
    }
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
    get signatoryParty() {
        return this._signatoryParty;
    }
    set signatoryParty(signatoryParty) {
        this._signatoryParty = signatoryParty;
    }
    get digitalSignatureAttachment() {
        return this._digitalSignatureAttachment;
    }
    set digitalSignatureAttachment(digitalSignatureAttachment) {
        this._digitalSignatureAttachment = digitalSignatureAttachment;
    }
};
__decorate([
    XMLChild({ namespace: CBC, name: 'ID' }),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], SignatureCac.prototype, "id", null);
__decorate([
    XMLChild({ namespace: CAC, name: 'SignatoryParty' }),
    __metadata("design:type", SignatoryParty),
    __metadata("design:paramtypes", [SignatoryParty])
], SignatureCac.prototype, "signatoryParty", null);
__decorate([
    XMLChild({ namespace: CAC, name: 'DigitalSignatureAttachment' }),
    __metadata("design:type", DigitalSignatureAttachment),
    __metadata("design:paramtypes", [DigitalSignatureAttachment])
], SignatureCac.prototype, "digitalSignatureAttachment", null);
SignatureCac = __decorate([
    XMLElement({ root: CAC }),
    __metadata("design:paramtypes", [SignatureCac])
], SignatureCac);
export { SignatureCac };
//# sourceMappingURL=SignatureCac.js.map