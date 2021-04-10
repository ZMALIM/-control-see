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
exports.DigitalSignatureAttachment = void 0;
const xml_serializer_ts_1 = require("xml-serializer-ts");
const constants_1 = require("@fe/common/constants");
const ExternalReference_1 = require("./ExternalReference");
const { CAC, CBC } = constants_1.prefix;
let DigitalSignatureAttachment = class DigitalSignatureAttachment {
    constructor(dsa) {
        this.externalReference = dsa.externalReference;
    }
    get externalReference() {
        return this._externalReference;
    }
    set externalReference(externalReference) {
        this._externalReference = externalReference;
    }
};
__decorate([
    xml_serializer_ts_1.XMLChild({ namespace: CAC, name: 'ExternalReference' }),
    __metadata("design:type", ExternalReference_1.ExternalReference),
    __metadata("design:paramtypes", [ExternalReference_1.ExternalReference])
], DigitalSignatureAttachment.prototype, "externalReference", null);
DigitalSignatureAttachment = __decorate([
    xml_serializer_ts_1.XMLElement({ root: CAC }),
    __metadata("design:paramtypes", [DigitalSignatureAttachment])
], DigitalSignatureAttachment);
exports.DigitalSignatureAttachment = DigitalSignatureAttachment;
//# sourceMappingURL=DigitalSignatureAttachment.js.map