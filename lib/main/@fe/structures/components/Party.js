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
exports.Party = void 0;
const xml_serializer_ts_1 = require("xml-serializer-ts");
const constants_1 = require("@fe/common/constants");
const PartyName_1 = require("./PartyName");
const PostalAddress_1 = require("./PostalAddress");
const PartyLegalEntity_1 = require("./PartyLegalEntity");
const PartyIdentification_1 = require("./PartyIdentification");
const PartyTaxScheme_1 = require("./PartyTaxScheme");
const { CAC } = constants_1.prefix;
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
    xml_serializer_ts_1.XMLChild({ namespace: CAC, name: 'PartyIdentification' }),
    __metadata("design:type", PartyIdentification_1.PartyIdentification)
], Party.prototype, "partyIdentification", void 0);
__decorate([
    xml_serializer_ts_1.XMLChild({ namespace: CAC, name: 'PartyName' }),
    __metadata("design:type", PartyName_1.PartyName)
], Party.prototype, "partyName", void 0);
__decorate([
    xml_serializer_ts_1.XMLChild({ namespace: CAC, name: 'PartyTaxScheme' }),
    __metadata("design:type", PartyTaxScheme_1.PartyTaxScheme)
], Party.prototype, "partyTaxScheme", void 0);
__decorate([
    xml_serializer_ts_1.XMLChild({ namespace: CAC, name: 'PostalAddress' }),
    __metadata("design:type", PostalAddress_1.PostalAddress)
], Party.prototype, "postalAddress", void 0);
__decorate([
    xml_serializer_ts_1.XMLChild({ namespace: CAC, name: 'PartyLegalEntity' }),
    __metadata("design:type", PartyLegalEntity_1.PartyLegalEntity)
], Party.prototype, "partyLegalEntity", void 0);
Party = __decorate([
    xml_serializer_ts_1.XMLElement({ root: CAC }),
    __metadata("design:paramtypes", [Party])
], Party);
exports.Party = Party;
//# sourceMappingURL=Party.js.map