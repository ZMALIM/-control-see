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
exports.SignatureCac = void 0;
const xml_serializer_ts_1 = require("xml-serializer-ts");
const constants_1 = require("@fe/common/constants");
const SignatoryParty_1 = require("./SignatoryParty");
const DigitalSignatureAttachment_1 = require("./DigitalSignatureAttachment");
const { CAC, CBC } = constants_1.prefix;
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
    xml_serializer_ts_1.XMLChild({ namespace: CBC, name: 'ID' }),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], SignatureCac.prototype, "id", null);
__decorate([
    xml_serializer_ts_1.XMLChild({ namespace: CAC, name: 'SignatoryParty' }),
    __metadata("design:type", SignatoryParty_1.SignatoryParty),
    __metadata("design:paramtypes", [SignatoryParty_1.SignatoryParty])
], SignatureCac.prototype, "signatoryParty", null);
__decorate([
    xml_serializer_ts_1.XMLChild({ namespace: CAC, name: 'DigitalSignatureAttachment' }),
    __metadata("design:type", DigitalSignatureAttachment_1.DigitalSignatureAttachment),
    __metadata("design:paramtypes", [DigitalSignatureAttachment_1.DigitalSignatureAttachment])
], SignatureCac.prototype, "digitalSignatureAttachment", null);
SignatureCac = __decorate([
    xml_serializer_ts_1.XMLElement({ root: CAC }),
    __metadata("design:paramtypes", [SignatureCac])
], SignatureCac);
exports.SignatureCac = SignatureCac;
//# sourceMappingURL=SignatureCac.js.map